const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const torpedos = [];
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
const ship = new Ship({
    posit: { x: canvas.width / 2, y: canvas.height / 2 },
    velo: { x: 0, y: 0 },
});

function play() {
    window.requestAnimationFrame(play);
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ship.move();
    // ship.velo.x = 0;
    // ship.velo.y = 0;
    // ship.rotate = 0
    for (let i = torpedos.length -1; i >= 0; i--) {
        const torpedo = torpedos[i];
        torpedo .move();

        if (
            torpedo.posit.x + torpedo.size < 0 ||
            torpedo.posit.x - torpedo.size > canvas.width ||
            torpedo.posit.y + torpedo.size < 0 ||
            torpedo.posit.y - torpedo.size > canvas.height
        ) {
            torpedos.splice(i, 1)
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