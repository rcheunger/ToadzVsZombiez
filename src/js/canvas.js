import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import tPlatform from '../img/tPlatform.png'

import toadRunRight from '../img/toadRunRight.png'
import toadRunLeft from '../img/toadRunLeft.png'

import toadRightStand from '../img/toadRightStand.png'
import toadLeftStand from '../img/toadLeftStand.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

// gravity strength
const gravity = 0.5

class Player {
    constructor() {
        this.speed = 10
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 90
        this.height = 120

        
        this.frames = 0
        this.sprites = {
            stand: {
                right: createImage(toadRightStand),
                left: createImage(toadLeftStand),
            },
            run: {
                right: createImage(toadRunRight),
                left: createImage(toadRunLeft),
            }
        }

        this.currentSprite = this.sprites.stand.right
    }

    draw() {
        c.drawImage(
            this.currentSprite,
            300 * this.frames,
            0,
            300,
            400,
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height)
    }

    // gravity properties
    update() {
        this.frames++

        if (this.frames > 28 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) 
            this.frames = 0
        else if (this.frames > 59 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left))
            this.frames = 0

        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y +this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
    }
}

class Platform {
    constructor({ x, y, image }) {
         this.position = {
             x,
             y
         }
         this.image = image
         this.width = image.width
         this.height = image.height 
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericObject {
    constructor({ x, y, image }) {
         this.position = {
             x,
             y
         }
         this.image = image
         this.width = image.width
         this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

function createImage(imageSrc) {
    const image = new Image()
    image.src= imageSrc
    return image
}

let platformImage = createImage(platform)
let tPlatformImage = createImage(tPlatform)

let player = new Player()
let platforms = []
let genericObjects = []

let lastKey
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

let scrollOffset = 0

function gameReset() {
    platformImage = createImage(platform)

    player = new Player()
    platforms = [
        new Platform({
        x: platformImage.width *4 + 300 - 2 + platformImage.width - tPlatformImage.width, y: 325, image: createImage(tPlatform)
    }),
        new Platform({
        x: -1, 
        y: 470,
        image: platformImage
    }), new Platform({
        x: platformImage.width -3, y: 470, image: platformImage
    }), new Platform({
        x: platformImage.width *2 + 100, y: 470, image: platformImage
    }), new Platform({
        x: platformImage.width *3 + 300, y: 470, image: platformImage
    }), new Platform({
        x: platformImage.width *4 + 300 - 2, y: 470, image: platformImage
    }), new Platform({
        x: platformImage.width *5 + 800 - 2, y: 470, image: platformImage
    })
]
    genericObjects = [
        new GenericObject({
            x: -1,
            y: -1,
            image: createImage(background)
        }),
        new GenericObject({
            x: -1,
            y: -1,
            image: createImage(hills)
        })
    ]

    scrollOffset = 0
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle= 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    genericObjects.forEach(genericObject => {
        genericObject.draw()
    })

    platforms.forEach(platform => {
       platform.draw() 
    })
    player.update()

    //left and right movement
    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed
    } else if (
        (keys.left.pressed && player.position.x > 100) || 
        (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)  
    ) {
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0
    
        if (keys.right.pressed) {
            scrollOffset += player.speed
            platforms.forEach(platform => {
                platform.position.x -= player.speed
             })
             genericObjects.forEach((genericObject) => {
                 genericObject.position.x -= player.speed * 0.66
             })
            
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed
            platforms.forEach(platform => {
                platform.position.x += player.speed
             })
             genericObjects.forEach((genericObject) => {
                genericObject.position.x += player.speed * 0.66
            })
        }
    }

    // platform collision detection
    platforms.forEach(platform => {
        if (player.position.y + player.height <= 
                platform.position.y + 41 && 
            player.position.y + player.height + player.velocity.y >= 
                platform.position.y + 41 && 
            player.position.x + player.width >= 
                platform.position.x && player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
            } 
    })        

    //Sprite Switching
    if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
        player.frames = 1
        player.currentSprite = player.sprites.run.right
        player.currentSprite = player.sprites.run.right
    } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
        player.currentSprite = player.sprites.run.left
    } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
        player.currentSprite = player.sprites.stand.left
    } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
        player.currentSprite = player.sprites.stand.right
    } 

    //win con
    if (scrollOffset > platformImage.width *5 + 400 - 2) {
        console.log('you WIN!')
    }

    //lose con
    if (player.position.y > canvas.height) {
        gameReset()
    }
}

gameReset()
animate()

// down key listener (asdw)
addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = true
            lastKey = 'left'
            break
        
        case 83:
            console.log('down')
            break
            
        case 68:
            console.log('right')
            keys.right.pressed = true
            lastKey = 'right'
            break

        case 87:
            console.log('up')
            player.velocity.y -= 15
            break
    }
})

// up key listener (asdw)
addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = false
            player.currentSprite = player.sprites.stand.left
            break
        
        case 83:
            console.log('down')
            break
            
        case 68:
            console.log('right')
            keys.right.pressed = false
            break

        case 87:
            console.log('up')
            break
    }
})