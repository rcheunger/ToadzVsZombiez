import {
    createImage, 
    createImageAsync, 
    isOnTopOfPlatform, 
    collisionTop, 
    isOnTopOfPlatformCircle,
    hitTopOfPlatform,
    hitBottomOfPlatform,
    hitSideOfPlatform,
    objectsTouch
} from './utils.js'

import platform from '../img/platform.png'
import tPlatform from '../img/tPlatform.png'
import xtPlatform from '../img/xtPlatform.png'

import hills from '../img/hills.png'
import background from '../img/background.png'

import block from '../img/block.png'
import blockTri from '../img/blockTri.png'

import toadRunRight from '../img/toadRunRight.png'
import toadRunLeft from '../img/toadRunLeft.png'
import toadRightStand from '../img/toadRightStand.png'
import toadLeftStand from '../img/toadLeftStand.png'
import toadJumpRight from '../img/toadJumpRight.png'
import toadJumpLeft from '../img/toadJumpLeft.png'

import cyclopsRunRight from '../img/cyclopsRunRight.png'
import cyclopsRunLeft from '../img/cyclopsRunLeft.png'
import cyclopsRightStand from '../img/cyclopsRightStand.png'
import cyclopsLeftStand from '../img/cyclopsLeftStand.png'
import cyclopsJumpRight from '../img/cyclopsJumpRight.png'
import cyclopsJumpLeft from '../img/cyclopsJumpLeft.png'

import zombieSprite from '../img/zombieSprite.png'
import zombieSpriteRight from '../img/zombieSpriteRight.png'
import potion from '../img/potion.png'

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
                potion: {
                    right: createImage(cyclopsRightStand),
                    left: createImage(cyclopsLeftStand)
                }
            },
            run: {
                right: createImage(toadRunRight),
                left: createImage(toadRunLeft),
                potion: {
                    right: createImage(cyclopsRunRight),
                    left: createImage(cyclopsRunLeft)
                }
            },
            jump: {
                right: createImage(toadJumpRight),
                left: createImage(toadJumpLeft),
                potion: {
                    right: createImage(cyclopsJumpRight),
                    left: createImage(cyclopsJumpLeft)
                }
            },
        }

        this.currentSprite = this.sprites.stand.right
        this.powerUps = {
            potion: false
        }
        this.invincible = false
        this.opacity = 1
    }

    draw() {
        c.save()
        c.globalAlpha = this.opacity
        c.drawImage(
            this.currentSprite,
            300 * this.frames,
            0,
            300,
            400,
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        )
        c.restore()
    }

    // gravity properties
    update() {
        this.frames++
        const {currentSprite, sprites} = this

        if (this.frames > 28 && (currentSprite === sprites.stand.right || currentSprite === sprites.stand.left 
            || currentSprite === sprites.stand.potion.left|| currentSprite === sprites.stand.potion.right)) 
            this.frames = 0
        else if (this.frames > 59 && (currentSprite === sprites.run.right || currentSprite === sprites.run.left 
            || currentSprite === sprites.run.potion.right || currentSprite === sprites.run.potion.left))
            this.frames = 0
        else if (currentSprite === sprites.jump.right ||
                 currentSprite === sprites.jump.left ||
                 currentSprite === sprites.jump.potion.right ||
                 currentSprite === sprites.jump.potion.left)
            this.frames = 0

        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y +this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity

        if (this.invincible) {
            if (this.opacity === 1) this.opacity = 0
                else this.opacity = 1
        } else this.opacity = 1
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

class Potion {
    constructor({position, velocity}) {
        this.position = {
            x: position.x,
            y: position.y,
        }

        this.velocity = {
            x: velocity.x,
            y: velocity.y,
        }

        this.width = 40
        this.height = 60
    
        this.image = createImage(potion)
        this.frames= 0

    }

    draw() {
        c.drawImage(
            this.image,
            40 * this.frames,
            0,
            40,
            60,
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height)
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y +this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
    }
}


class Particle {
    constructor({position, velocity, radius, color = 'green', laser = false}) {
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
        this.color = color
        this.laser = laser
    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
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
let xtPlatformImage
let blockTriImage
let blockImage


let player = new Player()
let platforms = []
let genericObjects = []
let zombiez = []
let particles = []
let potions = []

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
   xtPlatformImage = await createImageAsync(xtPlatform)
   blockTriImage = await createImageAsync(blockTri)
   blockImage = await createImageAsync(block)


    player = new Player()
    zombiez = [
        new Zombie({
        position: {
            x: 2750,
            y: 100
        },
        velocity: {
            x:-0.5,
            y: 0
        }
        }),

        new Zombie({
        position: {
            x: 6000,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },        
        distance: {
        limitLeft: 250,
        limitRight: -250,
        traveled: 0
        }
        }),

        new Zombie({
        position: {
            x: 6100,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },        
        distance: {
        limitLeft: 250,
        limitRight: -250,
        traveled: 0
        }
        }),

        new Zombie({
        position: {
            x: 6200,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },        
        distance: {
        limitLeft: 250,
        limitRight: -250,
        traveled: 0
        }
        }),
        
        new Zombie({
        position: {
            x: 6300,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },        
        distance: {
        limitLeft: 250,
        limitRight: -250,
        traveled: 0
        }
        }),

        new Zombie({
        position: {
            x: 8450,
            y: 100
        },
        velocity: {
            x:-0.5,
            y: 0
        }
        }),
        new Zombie({
        position: {
            x: 11600,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },        
        distance: {
        limitLeft: 150,
        limitRight: -150,
        traveled: 0
        }
        }),
        new Zombie({
        position: {
            x: 11800,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },        
        distance: {
        limitLeft: 225,
        limitRight: -225,
        traveled: 0
        }
        }),
        new Zombie({
        position: {
            x: 12000,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },        
        distance: {
        limitLeft: 200,
        limitRight: -200,
        traveled: 0
        }
        }),
        new Zombie({
        position: {
            x: 12200,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },        
        distance: {
        limitLeft: 175,
        limitRight: -175,
        traveled: 0
        }
        }),
        new Zombie({
        position: {
            x: 12400,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },        
        distance: {
        limitLeft: 150,
        limitRight: -150,
        traveled: 0
        }
        }),
        new Zombie({
        position: {
            x: 12700,
            y: 100,
        },
        velocity: {
            x:-0.5,
            y: 0,
        },        
        distance: {
        limitLeft: 350,
        limitRight: -100,
        traveled: 0
        }
        }),
    ]
    
    particles = []
    platforms = [
    new Platform ({
        x: 1700,
        y: 290,
        image: blockTriImage,
        block: true
    }),
    new Platform ({
        x: 2150,
        y: 190,
        image: xtPlatformImage,
    }),
    new Platform ({
        x: 3750,
        y: 290,
        image: blockImage,
        block: true
    }),
    new Platform ({
        x: 4125,
        y: 310,
        image: tPlatformImage,
    }),
    new Platform ({
        x: 6925,
        y: 290,
        image: blockTriImage,
        block: true
    }),
    new Platform ({
        x: 9325,
        y: 400,
        image: blockImage,
        block: true
    }),
    new Platform ({
        x: 9525,
        y: 400,
        image: blockImage,
        block: true
    }),
    new Platform ({
        x: 9725,
        y: 400,
        image: blockImage,
        block: true
    }),
    new Platform ({
        x: 9925,
        y: 350,
        image: blockImage,
        block: true
    }),
    new Platform ({
        x: 10125,
        y: 300,
        image: blockImage,
        block: true
    }),
    new Platform ({
        x: 10325,
        y: 250,
        image: blockImage,
        block: true
    }),
    new Platform ({
        x: 10525,
        y: 200,
        image: blockTriImage,
        block: true
    }),
    new Platform ({
        x: 10678,
        y: 200,
        image: blockTriImage,
        block: true
    }),
    new Platform ({
        x: 10831,
        y: 200,
        image: blockTriImage,
        block: true
    }),
    new Platform ({
        x: 10984,
        y: 200,
        image: blockTriImage,
        block: true
    }),
    new Platform ({
        x: 11437,
        y: 150,
        image: blockImage,
        block: true
    }),
    new Platform ({
        x: 11737,
        y: 150,
        image: blockImage,
        block: true
    }),
    new Platform ({
        x: 12037,
        y: 150,
        image: blockImage,
        block: true
    }),
    new Platform ({
        x: 12337,
        y: 150,
        image: blockImage,
        block: true
    }),
    ]

    potions = [new Potion({position: {
        x: 2248,
        y: -150
    },
    velocity: {
        x: 0,
        y: 0
    }
    })]

    genericObjects = [
        new GenericObject({
            x: -1,
            y: 0,
            image: createImage(background)
        }),
        new GenericObject({
            x: -1,
            y: 0,
            image: createImage(hills)
        })
    ]

    scrollOffset = 0

    const platformsMap = ['plat', 'plat', 'plat', 'plat', 'plat', 'gap', 'plat', 'plat', 
    'gap', 'gap', 'plat', 'plat', 'plat', 'gap', 'gap', 'tPlat', 'gap', 'xtPlat', 'gap', 
    'xtPlat', 'gap', 'xtPlat', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'gap', 'plat', 
    'plat', 'plat', 'plat', 'plat']

    let platformDistance = 0

    platformsMap.forEach(symbol => {
        switch(symbol) {
            case 'plat':
                platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - platformImage.height,
                    image: platformImage,
                }))

            platformDistance += platformImage.width

            break

            case 'gap':
                platformDistance += 300

                break;
            
            case 'tPlat':
                platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - tPlatformImage.height,
                    image: tPlatformImage,

                }))

            platformDistance += tPlatformImage.width

            break

            case 'xtPlat':
                platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - xtPlatformImage.height,
                    image: xtPlatformImage,

                }))

            platformDistance += xtPlatformImage.width

            break
        }

    })
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

    //Toad potion powerup
    potions.forEach((potion, i) => {
        if (objectsTouch ({ 
            object1: player,
            object2: potion
        })
        ) {
            player.powerUps.potion = true
        setTimeout(() => {
            potions.splice(i, 1)
        }, 0)
        } else potion.update()
    })

    zombiez.forEach((zombie, index) => {
        zombie.update()

        //remove zombie on laser beam
        particles.filter(particle => particle.laser) .forEach((particle, particleIndex) => {
            if (particle.position.x + particle.radius >= zombie.position.x
                && particle.position.y + particle.radius >= zombie.position.y
                && particle.position.x - particle.radius <= zombie.position.x + zombie.width
                && particle.position.y - particle.radius <= zombie.position.y + zombie.height)
            {
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
            setTimeout(() => {
                zombiez.splice(index, 1)   
                particles.splice(particleIndex, 1)
            }, 0)
            }
        })

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
        ) { 
        //player hits zombie
            if (player.powerUps.potion) {
                player.invincible = true
                player.powerUps.potion = false

                setTimeout(() => {
                    player.invincible = false}, 1000)
            } else if (!player.invincible)gameReset()
        }
           
    })

    particles.forEach((particle, i) => {
        particle.update()

        if (particle.laser && (particle.position.x - particle.radius >= canvas.width 
            || particle.position.x + particle.radius <= 0)) 
        setTimeout(() => {
            particles.splice(i, 1)
        }, 0)
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

            potions.forEach((potion) => {
                potion.position.x -= player.speed
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

                potions.forEach((potion) => {
                    potion.position.x += player.speed
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

        potions.forEach(potion => {
            if (isOnTopOfPlatform({
                object: potion,
                platform
            })) 
            potion.velocity.y = 0
        })
    })       

  //win con
    if (platformImage && scrollOffset + 400 + player.width > 13200) {
        console.log('you WIN!')
    }

    //lose con
    if (player.position.y > canvas.height) {
        gameReset()
    }

    //Sprite Switching
    if (player.velocity.y !== 0) return

    if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
        player.currentSprite = player.sprites.run.right
    } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
        player.currentSprite = player.sprites.run.left
    } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
        player.currentSprite = player.sprites.stand.left
    } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
        player.currentSprite = player.sprites.stand.right
    } 

    //cyclops(potion) sprites
    if (!player.powerUps.potion) return

    if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.potion.right) {
        player.currentSprite = player.sprites.run.potion.right
    } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.potion.left) {
        player.currentSprite = player.sprites.run.potion.left
    } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.potion.left) {
        player.currentSprite = player.sprites.stand.potion.left
    } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.potion.right) {
        player.currentSprite = player.sprites.stand.potion.right
    } 
}

gameReset()
animate()

// down key listener (asdw)
addEventListener('keydown', ({ keyCode }) => {
    //console.log(keyCode)
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

            if (!player.powerUps.potion) break

            if (lastKey === 'right') 
            player.currentSprite = player.sprites.jump.potion.right
            else
            player.currentSprite = player.sprites.jump.potion.left

            break

        case 32:
            console.log('space')

            if (!player.powerUps.potion) return

            let velocity = 60
            if (lastKey === 'left') velocity = -60

            particles.push(new Particle({
                position: {
                    x: player.position.x + player.width / 2,
                    y: player.position.y + player.height / 2 -40
                },
                velocity: {
                    x: velocity,
                    y: 0
                },
                radius: 7,
                color: 'red',
                laser: true
            }))
    }
})

// up key listener (asdw)
addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = false
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