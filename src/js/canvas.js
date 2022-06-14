import {
    createImage, 
    createImageAsync, 
    isOnTopOfPlatform, 
    collisionTop, 
    isOnTopOfPlatformCircle,
    hitTopOfPlatform,
    hitBottomOfPlatform,
    hitSideOfPlatform
} from './utils.js'

import platform from '../img/platform.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import tPlatform from '../img/tPlatform.png'
import block from '../img/block.png'
import blockTri from '../img/blockTri.png'

import toadRunRight from '../img/toadRunRight.png'
import toadRunLeft from '../img/toadRunLeft.png'

import toadRightStand from '../img/toadRightStand.png'
import toadLeftStand from '../img/toadLeftStand.png'
import toadJumpRight from '../img/toadJumpRight.png'
import toadJumpLeft from '../img/toadJumpLeft.png'

import zombieSprite from '../img/zombieSprite.png'
import zombieSpriteRight from '../img/zombieSpriteRight.png'

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
            },
            jump: {
                right: createImage(toadJumpRight),
                left: createImage(toadJumpLeft)
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
        else if (this.currentSprite === this.sprites.jump.right ||
                 this.currentSprite === this.sprites.jump.left)
            this.frames = 0

        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y +this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
    }
}

class Platform {
    constructor({ x, y, image, block }) {
         this.position = {
             x,
             y
         }

         this.velocity = {
             x: 0
         }

         this.image = image
         this.width = image.width
         this.height = image.height 
         this.block = block
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
    }
}

class GenericObject {
    constructor({ x, y, image }) {
         this.position = {
             x,
             y
         }

         this.velocity = {
            x: 0
        }

         this.image = image
         this.width = image.width
         this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
    }
}

class Zombie {
    constructor({position, velocity, distance = {
        limitLeft: 75,
        limitRight: -75,
        traveled: 0
    } }) {
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
        
        this.sprites = {
            walk: {
                right: createImage(zombieSpriteRight),
                left: createImage(zombieSprite),
            }
        }
        
        this.currentSprite = this.sprites.walk.left
        this.frames= 0

        this.distance = distance
    }

    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    
        c.drawImage(
            this.currentSprite,
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
        if (this.frames > 47 && (this.currentSprite === this.sprites.walk.left || this.currentSprite === this.sprites.walk.right)) 
            this.frames = 0
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y +this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity

        //walk the zombie backwards
        this.distance.traveled -= this.velocity.x
        
        if (this.distance.traveled > this.distance.limitLeft) {
            this.distance.traveled = 0
            this.velocity.x = -this.velocity.x
            this.currentSprite = this.sprites.walk.right
        } else if (this.distance.traveled < this.distance.limitRight) {
            this.distance.traveled = 0
            this.velocity.x = -this.velocity.x
            this.currentSprite = this.sprites.walk.left
        }
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

//defining platforms
let platformImage
let tPlatformImage
let blockTriImage

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

async function gameReset() {
   platformImage = await createImageAsync(platform)
   tPlatformImage = await createImageAsync(tPlatform)
   blockTriImage = await createImageAsync(blockTri)

    //platform creation
    player = new Player()
    zombiez = [
        new Zombie({
        position: {
            x: 800,
            y: 100
        },
        velocity: {
            x:-0.5,
            y: 0
        },
        distance: {
            limitLeft: 125,
            limitRight: -125,
            traveled: 0
        }
        }),
        new Zombie({
        position: {
            x: 1500,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },
       
        }),
    ]
    
    particles = []
    platforms = [
        new Platform({
        x: platformImage.width *4 + 390 - 2 + platformImage.width - tPlatformImage.width, y: 325, image: createImage(tPlatform)
    }),
        new Platform({
        x: -1, 
        y: 470,
        image: platformImage
    }), new Platform({
        x: platformImage.width -3, y: 470, image: platformImage
    }), new Platform({
        x: platformImage.width *2 + 200, y: 470, image: platformImage
    }), new Platform({
        x: platformImage.width *3 + 400, y: 470, image: platformImage
    }), new Platform({
        x: platformImage.width *4 + 400 - 2, y: 470, image: platformImage
    }), new Platform({
        x: platformImage.width *5 + 1000 - 2, y: 470, image: platformImage
    }), new Platform({
        x: 500, y: 300, image: blockTriImage,
        block: true
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
        genericObject.update()
        genericObject.velocity.x = 0
    })

    platforms.forEach(platform => {
       platform.update() 
       platform.velocity.x = 0
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
            player.velocity.y -=`25`
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

    let hitSide = false
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
            for (let i = 0; i < platforms.length; i++) {
                const platform = platforms[i]
                platform.velocity.x = -player.speed
        
                if (
                  platform.block &&
                  hitSideOfPlatform({
                    object: player,
                    platform
                  })
                ) {
                  platforms.forEach((platform) => {
                    platform.velocity.x = 0
                  })

                hitSide = true
                break
                }
            }    

        if (!hitSide) {
        scrollOffset += player.speed

        genericObjects.forEach((genericObject) => {
          genericObject.velocity.x = -player.speed * 0.66
        })

            zombiez.forEach((zombie) => {
                zombie.position.x -= player.speed
            })

            particles.forEach((particle) => {
                particle.position.x -= player.speed
            })
        }
            
        } else if (keys.left.pressed && scrollOffset > 0) {
            for (let i = 0; i < platforms.length; i++) {
                const platform = platforms[i]
                platform.velocity.x = player.speed
        
                if (
                  platform.block &&
                  hitSideOfPlatform({
                    object: player,
                    platform
                  })
                ) {
                  platforms.forEach((platform) => {
                    platform.velocity.x = 0
                  })
                  hitSide = true
                  break
                }
              }
              if (!hitSide) {
                scrollOffset -= player.speed
                genericObjects.forEach((genericObject) => {
                  genericObject.velocity.x = player.speed * 0.66
                })

                zombiez.forEach((zombie) => {
                    zombie.position.x += player.speed
                })

                particles.forEach((particle) => {
                   particle.position.x += player.speed
                })
            }
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

        if (platform.block && hitTopOfPlatform({
            object: player,
            platform
        })) {
            player.velocity.y = 0
        }

        if (platform.block && hitBottomOfPlatform({
            object: player,
            platform
        })) {
            player.velocity.y = -player.velocity.y
        }

        if (platform.block && hitSideOfPlatform({
                object: player,
                platform
            })) {
                player.velocity.x = 0
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
    if (player.velocity.y === 0) {
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
            
            if (lastKey === 'right') 
            player.currentSprite = player.sprites.jump.right
            else
            player.currentSprite = player.sprites.jump.left
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