function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
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

function isOnTopOfPad({ object, pad }) {
  return (
      object.position.y + object.height <= 
      pad.position.y + 15 && 
      object.position.y + object.height + object.velocity.y >= 
      pad.position.y + 15 && 
      object.position.x + object.width >= 
      pad.position.x && object.position.x <= pad.position.x + pad.width
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

function hitTopOfPlatform({object, platform}) {
  return object.position.y + object.height <= 
  platform.position.y && 
  object.position.y + object.height + object.velocity.y >= 
  platform.position.y && 
  object.position.x + object.width >= 
  platform.position.x && object.position.x <= platform.position.x + platform.width
}

function hitBottomOfPlatform({object, platform}) {
  return object.position.y <= platform.position.y + platform.height && 
  object.position.y - object.velocity.y >= platform.position.y + platform.height &&
  object.position.x + object.width >= platform.position.x &&
  object.position.x <= platform.position.x + platform.width
}

function hitSideOfPlatform({ object, platform }) {
  return (
    object.position.x + object.width + object.velocity.x - platform.velocity.x >= platform.position.x &&
    object.position.x + object.velocity.x <= platform.position.x + platform.width &&
    object.position.y <= platform.position.y + platform.height &&
    object.position.y + object.height >= platform.position.y
  )
}

function objectsTouch({ object1, object2 }) {
  return (
    object1.position.x+ object1.width >= object2.position.x &&
    object1.position.x <= object2.position.x + object2.width &&
    object1.position.y + object1.height >= object2.position.y &&
    object1.position.y <= object2.position.y + object2.height
  )
}

function playerOnTopOfPlatform({ player, platform }) {
  return (
      player.position + player.height <= 
      platform.position && 
      player.position + player.height + player.velocity>= 
      platform.position && 
      player.position + player.width >= 
      platform.position && player.position <= platform.position + platform.width
  )
}


//loading bar move function

function move() {
  let i = 0;
    if (i == 0) {
      i = 1;
      let elem = document.getElementById("myBar");
      let width = 1;
      let id = setInterval(frame, 50);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }