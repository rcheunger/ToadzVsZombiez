import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import tPlatform from '../img/tPlatform.png'

import toadRunRight from '../img/toadRunRight.png'
import toadRunLeft from '../img/toadRunLeft.png'

import toadRightStand from '../img/toadRightStand.png'
import toadLeftStand from '../img/toadLeftStand.png'

import zombieSprite from '../img/zombieSprite.png'

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

        //sprite animations imported
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

class Zombie {
    constructor({position, velocity}) {
        this.position = {
            x: position.x,
            y: position.y,
        }

        this.velocity = {
            x: velocity.x,
            y: velocity.y,
        }

        this.width = 120
        this.height = 150

        this.image = createImage(zombieSprite)
        this.frames= 0
    }

    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    
        c.drawImage(
            this.image,
            300 * this.frames,
            0,
            300,
            400,
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height,
            this.position.x)
    }

    update() {
        this.frames++
        if (this.frames >= 48) this.frames = 0
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y +this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
    }
}

class Particle {
    constructor({position, velocity, radius}) {
        this.position = {
            x: position.x,
            y: position.y
        }
        this.velocity = {
            x: velocity.x,
            y: velocity.y
        }
        this.radius = radius
        this.ttl = 300
    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = 'green'
        c.fill()
        c.closePath()
    }

    update() {
        this.ttl--
        this.draw()
        this.position.x += this.velocity.x
        this.position.y+= this.velocity.y

        if (this.position.y +this.radius + this.velocity.y <= canvas.height)
        this.velocity.y += gravity * 0.5
    }
}


//create image function
function createImage(imageSrc) {
    const image = new Image()
    image.src= imageSrc
    return image
}


//create player after platforms loaded function
function createImageAsync(imageSrc) {
    return new Promise((resolve) => {
    const image = new Image()
    image.onload = () => {
        resolve(image)
    }
    image.src = imageSrc
    })
}

//defining platforms
let platformImage
let tPlatformImage

let player = new Player()
let platforms = []
let genericObjects = []
let zombiez = []
let particles = []

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
function isOnTopOfPlatform({ object, platform }) {
    return (
        object.position.y + object.height <= 
        platform.position.y + 41 && 
        object.position.y + object.height + object.velocity.y >= 
        platform.position.y + 41 && 
        object.position.x + object.width >= 
        platform.position.x && object.position.x <= platform.position.x + platform.width
    )
}

function collisionTop({ object1, object2 }) {
    return (
        object1.position.y + object1.height <= 
        object2.position.y && 
        object1.position.y + object1.height + object1.velocity.y >= 
        object2.position.y && 
        object1.position.x + object1.width >= 
        object2.position.x && object1.position.x <= object2.position.x + object2.width
    )
}

function isOnTopOfPlatformCircle({ object, platform }) {
    return (
        object.position.y + object.radius <= 
        platform.position.y + 41 && 
        object.position.y + object.radius + object.velocity.y >= 
        platform.position.y + 41 && 
        object.position.x + object.radius >= 
        platform.position.x && object.position.x <= platform.position.x + platform.width
    )
}

async function gameReset() {
   platformImage = await createImageAsync(platform)
   tPlatformImage = await createImageAsync(tPlatform)

    //platform creation
    player = new Player()
    zombiez = [
        new Zombie({
        position: {
            x: 800,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        }
    })]
    particles = []
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

    zombiez.forEach((zombie, index) => {
        zombie.update()

        //zombie squish 
        if (collisionTop({
            object1: player,
            object2: zombie
        })) {
            //squished zombie particles
            for (let i = 0; i < 50; i++) {
                 particles.push(new Particle({
                     position: {
                         x: zombie.position.x + zombie.width / 2,
                        y: zombie.position.y + zombie.height / 2
                    },
                    velocity: {
                        x: (Math.random() - 0.5) * 5,
                        y: (Math.random() - 0.5) * 10
                    },
                    radius: Math.random() * 2.5
                }))
                }
            player.velocity.y -=30
            setTimeout(() => {
                zombiez.splice(index, 1)   
                
            }, 0)
        } else if (
            player.position.x + player.width >= zombie.position.x
                && 
            player.position.y + player.height >= zombie.position.y
                &&
            player.position.x <= zombie.position.x + zombie.width
        ) gameReset()
    })

    particles.forEach(particle => {
        particle.update()
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
    
        //scrolling code
        if (keys.right.pressed) {
            scrollOffset += player.speed
            platforms.forEach(platform => {
                platform.position.x -= player.speed
             })
             genericObjects.forEach((genericObject) => {
                 genericObject.position.x -= player.speed * 0.66
             })

             zombiez.forEach(zombie => {
                zombie.position.x -= player.speed
             })

             particles.forEach(particle => {
                particle.position.x -= player.speed
             })
            
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed
            platforms.forEach(platform => {
                platform.position.x += player.speed
             })
             genericObjects.forEach((genericObject) => {
                genericObject.position.x += player.speed * 0.66
            })

            zombiez.forEach(zombie => {
                zombie.position.x += player.speed
             })

             particles.forEach(particle => {
                particle.position.x += player.speed
             })
        }
    }

    // platform collision detection
    platforms.forEach(platform => {
        if (
            isOnTopOfPlatform({
                object: player,
                platform
            })
        ) {
            player.velocity.y = 0
        } 

        //particle bounce
        particles.forEach((particle, index) => {
                if (
                    isOnTopOfPlatformCircle({
                    object: particle,
                    platform
                })
            ) {
                particle.velocity.y = -particle.velocity.y * 0.9

                if (particle.radius - 0.4 < 0) particles.splice(index, 1)
                else particle.radius -= 0.4
            } 

                if ( particle.ttl < 0)
                    particles.splice(index, 1)
        })
        

        zombiez.forEach(zombie => {
            if (isOnTopOfPlatform({
                object: zombie,
                platform
            })) 
            zombie.velocity.y = 0
        })
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
    if (platformImage && scrollOffset > platformImage.width *5 + 400 - 2) {
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