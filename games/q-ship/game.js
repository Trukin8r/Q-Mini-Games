const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const torpedos = [];
const mines = [];
const junk = [];
const qortal = [];
const images = [];
let sSpeed = 3;
let rSpeed = .04;
let friction = .97;
let tSpeed = 4;
let tCount = 5;
let score = 0;
let powerUp = 0
const keys = {
    w: {
        press: false
    },
    a: {
        press: false
    },
    d: {
        press: false
    }
}
function loadImages() {
    for ( i=0; i < 10; i++) {
        images[i] = new Image();
    }
    images[0].src = './images/qortal_overlay.png';
    images[1].src = './images/TechF.png';
    images[2].src = './images/TechG.png';
    images[3].src = './images/TechM.png';
    images[4].src = './images/MoneyF.png';
    images[5].src = './images/MoneyE.png';
    images[6].src = './images/MoneyD.png';
    images[7].src = './images/GovC.png';
    images[8].src = './images/GovC.png';
    images[9].src = './images/GovC.png';
  }

  loadImages()
window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyW':
            keys.w.press = true
            break;
        case 'KeyA':
            keys.a.press = true
            break;
        case 'KeyD':
            keys.d.press = true
            break;
        case 'Space':
            launch();
            break;
    }
});
window.addEventListener('keyup', (e) => {
    switch (e.code) {
        case 'KeyW':
            keys.w.press = false
            break;
        case 'KeyA':
            keys.a.press = false
            break;
        case 'KeyD':
            keys.d.press = false
            break;
        case 'Space':
             
            break;
    }
});
canvas.width = 1020;
canvas.height = 600;

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height);

const objectInterval = window.setInterval(() => {
    const index = Math.floor(Math.random() * 4)
    const type = Math.floor(Math.random() * 4)
    let x, y
    let vx, vy
    let radius = 70 * Math.random() + 25
    let img;
    switch (index) {
      case 0: // left side of the screen
        x = 0 - radius;
        y = Math.random() * canvas.height;
        vx = 1;
        if (Math.random() > .5) {
            vy = Math.random() * 2;
        } else {
            vy = Math.random() * -2;
        }
        break;
      case 1: // bottom side of the screen
        x = Math.random() * canvas.width;
        y = canvas.height + radius;
        if (Math.random() > .5) {
            vx = Math.random() * 2;
        } else {
            vx = Math.random() * -2;
        }
        vy = -1;
        break;
      case 2: // right side of the screen
        x = canvas.width + radius
        y = Math.random() * canvas.height
        vx = -1;
        if (Math.random() > .5) {
            vy = Math.random() * 2;
        } else {
            vy = Math.random() * -2;
        }
        break;
      case 3: // top side of the screen
        x = Math.random() * canvas.width
        y = 0 - radius
        if (Math.random() > .5) {
            vx = Math.random() * 2;
        } else {
            vx = Math.random() * -2;
        }
        vy = 1
        break
    }
    console.log(type)
    if (type < 3){
        switch(type) {
            case 0:
                img = (Math.floor(Math.random() * 3)) + 7;
                break;
            case 1:
                img = (Math.floor(Math.random() * 3)) + 4;
                break;
            case 2:
                img = (Math.floor(Math.random() * 3)) + 1;
                break;
        }
        junk.push(
        new Junk({
            posit: {
            x: x,
            y: y,
            },
            velo: {
            x: vx,
            y: vy,
            },
            radius,
            type, img,
        })
        )
    } else if (Math.random() < .5) {
        console.log('Qortal')
        qortal.push(
            new Qortal({
                posit: {
                x: x,
                y: y,
                },
                velo: {
                x: vx,
                y: vy,
                },
                radius,
                })
            )
    }
  }, 3000)

function launch() {
    if (torpedos.length < tCount){
        switch(powerUp) {
            case 0:
            case 1:
                torpedos.push(
                    new Torpedos({
                        posit: {
                            x: ship.posit.x + Math.cos(ship.rotate) * 30,
                            y: ship.posit.y + Math.sin(ship.rotate) * 30,
                        },
                        velo: {
                            x: Math.cos(ship.rotate) * tSpeed,
                            y: Math.sin(ship.rotate) * tSpeed,
                        },       
                    })
                );
                break;
            case 2:
                torpedos.push(
                    new Torpedos({
                        posit: {
                            x: ship.posit.x + Math.cos(ship.rotate) * 30,
                            y: ship.posit.y + Math.sin(ship.rotate) * 30,
                        },
                        velo: {
                            x: Math.cos(ship.rotate) * tSpeed,
                            y: Math.sin(ship.rotate) * tSpeed,
                        },       
                    })
                );
                torpedos.push(
                    new Torpedos({
                        posit: {
                            x: ship.posit.x + (Math.cos(ship.rotate)) * 30,
                            y: ship.posit.y + (Math.sin(ship.rotate)) * 30,
                        },
                        velo: {
                            x: Math.cos(ship.rotate - .3) * tSpeed,
                            y: Math.sin(ship.rotate - .3) * tSpeed,
                        },       
                    })
                );
                torpedos.push(
                    new Torpedos({
                        posit: {
                            x: ship.posit.x + (Math.cos(ship.rotate)) * 30,
                            y: ship.posit.y + (Math.sin(ship.rotate)) * 30,
                        },
                        velo: {
                            x: Math.cos(ship.rotate + .3) * tSpeed,
                            y: Math.sin(ship.rotate + .3) * tSpeed,
                        },       
                    })
                );
                break;  
        }
    }
}    

class Ship {
    constructor({ posit, velo }) {
        this.posit = posit;
        this.velo = velo;
        this.rotate = 0;
    }

    draw() {
        ctx.save();
        ctx.translate(this.posit.x, this.posit.y);
        ctx.rotate(this.rotate);
        ctx.translate(-this.posit.x, -this.posit.y);
        ctx.beginPath();
        ctx.arc(this.posit.x, this.posit.y, 5, 0, Math.PI * 2, true);
        ctx.fillStyle = 'dodgerblue';
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(this.posit.x + 30, this.posit.y);
        ctx.lineTo(this.posit.x - 10, this.posit.y - 10);
        ctx.lineTo(this.posit.x - 10, this.posit.y + 10);
        ctx.closePath();
        ctx.strokeStyle= 'lightblue';
        ctx.stroke();
        ctx.restore();
    }
    move() {
        this.draw();
        this.posit.x += this.velo.x;
        this.posit.y += this.velo.y;
    }
}
class Torpedos {
    constructor({ posit, velo }) {
        this.posit = posit;
        this.velo = velo;
        this.size = 5;
        
    }
    shoot() {
        ctx.beginPath();
        ctx.arc(this.posit.x, this.posit.y, this.size, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = 'lightblue';
        ctx.fill();
        ctx.closePath();
    }
    move() {
        this.shoot();
        this.posit.x += this.velo.x;
        this.posit.y += this.velo.y;
        
    }
}
class Junk {
    constructor({ posit, velo, radius, type, img }) {
        this.posit = posit;
        this.velo = velo;
        this.radius = radius;
        this.type = type;
        this.img = img;
        
    }
    spawn() {
        
        ctx.drawImage(
            images[this.img],
            this.posit.x,
            this.posit.y,
            this.radius,
            this.radius
        )
        
    }
    move() {
        this.spawn();
        this.posit.x += this.velo.x;
        this.posit.y += this.velo.y;
        if (this.type == 0) {
            if (this.radius < 125){
                this.radius += .25
            } else {
                this.radius += .1
            }
        }
        
        
    }
}
class Qortal {
    constructor({ posit, velo, radius, }) {
        this.posit = posit;
        this.velo = velo;
        this.radius = 15;
        
    }
    spawn() {
        ctx.drawImage(
                // document.getElementById('qImg'),
                images[0],
                this.posit.x,
                this.posit.y,
                25,
                25
            )
    }
    move() {
        this.spawn();
        this.posit.x += this.velo.x;
        this.posit.y += this.velo.y;
        
    }
}
class Mine {
    constructor({ posit, velo,}) {
        this.posit = posit;
        this.velo = velo;
        this.radius = 5;
        // if (Math.random() > .5) {
        //     this.xvelo = Math.random() * 1;
        // } else {
        //     this.xvelo = Math.random() * -1;
        // }
        // if (Math.random() > .5) {
        //     this.yvelo = Math.random() * 1;
        // } else {
        //     this.yvelo = Math.random() * -1;
        // }
        // this.radius = 5;
        
    }
    spawn() {
        ctx.beginPath();
        ctx.arc(this.posit.x, this.posit.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
    move() {
        this.spawn();
        this.posit.x += this.velo.x;
        this.posit.y += this.velo.y;
        
    }
}

const ship = new Ship({
    posit: { x: canvas.width / 2, y: canvas.height / 2 },
    velo: { x: 0, y: 0 },
});

function play() {
    window.requestAnimationFrame(play);
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ship.move();
    for (let i = torpedos.length -1; i >= 0; i--) {
        const torpedo = torpedos[i];
        torpedo.move();

        if (
            torpedo.posit.x + torpedo.size < 0 ||
            torpedo.posit.x - torpedo.size > canvas.width ||
            torpedo.posit.y + torpedo.size < 0 ||
            torpedo.posit.y - torpedo.size > canvas.height
        ) {
            torpedos.splice(i, 1)
        }
    }
    
    
    for (let i = junk.length -1; i >= 0; i--) {
        const sjunk = junk[i];
        sjunk.move();
        
        if (sjunk.type == 2){
            let vx;
            let vy;
            let dy;
            let dx;
            if (Math.random() < .005){
                console.log('New Mine')
                if (sjunk.velo.x < 0) {
                    vx = Math.random() * 1;
                    dx = 1;
                } else {
                    vx = Math.random() * -1;
                    dx = -1;
                }
                if (sjunk.velo.y < 0) {
                    vy = Math.random() * 1;
                    dy = 1;
                } else {
                    vy = Math.random() * -1;
                    dy = -1;
                }
                mines.push (
                    new Mine({
                        posit: {
                            x: sjunk.posit.x + (sjunk.radius * dx),
                            y: sjunk.posit.y + (sjunk.radius * dy)
                        },
                        velo: {
                            x: vx,
                            y: vy
                        }
                    

                    })
                )
            }
        }

        // posit: {
        //     x: ship.posit.x + (Math.cos(ship.rotate)) * 30,
        //     y: ship.posit.y + (Math.sin(ship.rotate)) * 30,

        if (
            sjunk.posit.x + sjunk.radius < 0 ||
            sjunk.posit.x - sjunk.radius > canvas.width ||
            sjunk.posit.y + sjunk.radius < 0 ||
            sjunk.posit.y - sjunk.radius > canvas.height
        ) {
            junk.splice(i, 1)
            
        }
    }
    for (let i = mines.length -1; i >= 0; i--) {
        const smine = mines[i];
        smine.move();
    }

    for (let i = qortal.length -1; i >= 0; i--) {
        const qortal1 = qortal[i];
        qortal1.move();

        
    }

    for (let i = mines.length -1; i >= 0; i--) {
        const smine = mines[i];
        smine.move();

        if (
            smine.posit.x + smine.radius < 0 ||
            smine.posit.x - smine.radius > canvas.width ||
            smine.posit.y + smine.radius < 0 ||
            smine.posit.y - smine.radius > canvas.height
        ) {
            mines.splice(i, 1)
        }
    }
    
    if (keys.w.press) {
        ship.velo.x = Math.cos(ship.rotate) * sSpeed;
        ship.velo.y = Math.sin(ship.rotate) * sSpeed;
    } else if (!keys.w.press) {
        ship.velo.x *= friction;
        ship.velo.y *= friction;
    }
    if (keys.d.press) {ship.rotate += rSpeed
    } else if (!keys.d.press && !keys.a.press) ship.rotate = ship.rotate
    if (keys.a.press) {ship.rotate -= rSpeed}
}


ship.draw()

play()
function showTP(toolTip){
    toolTip.style.display = 'block';
}
function hideTP(toolTip){
    toolTip.style.display = '';
}