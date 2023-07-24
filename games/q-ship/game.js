const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const torpedos = [];
const mines = [];
const junk = [];
const qortal = [];
const images = [];
let sSpeed = 3;// Ship speed
let rSpeed = .04; // Ship rotation speed
let friction = .97; // Ship deceleration rate
let tSpeed = 4; // torpedo speed
let tCount = 15; // max torpedos on  screen
let score = 0;
let level = 1;
let paused = true;
let powerUp = 2;
let intJ = 1; //Space Junk Spawn rate
let jSpeed = .5; //Space Junk base speed
let jSpeed_F = .25; // Space Junk minimum speed
let mineF = .002; // Space Mine release chance
let qRate = .45; // Qortal spawn rate
let launchC = 0;//
let launchR = 0;

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
            
            break;
        case 'KeyL':
            score += 1000
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
            launch(); 
            break;
        case 'KeyP':
            paused = !paused;
            console.log('Paused: ' + paused)
            if (!paused){
                play()
            }
            break;
    }
});
canvas.width = 1020;
canvas.height = 600;

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height);

const objectInterval = window.setInterval(() => {
    let index;
    let type;
    let x, y;
    let vx, vy;
    let radius;
    let img;
    if(!paused) {
        for(let i = 0; i < intJ; i++) {
            // console.log('index: ' + i);
            radius = 70 * Math.random() + 25;
            index = Math.floor(Math.random() * 4)
            type = Math.floor(Math.random() * 4)
            switch (index) {
            case 0: // left side of the screen
                x = 0 - radius;
                y = Math.random() * canvas.height;
                vx = Math.random(0) * (jSpeed + jSpeed_F);
                if (Math.random() > .5) {
                    vy = Math.random() * (jSpeed + jSpeed_F);
                } else {
                    vy = Math.random() * ((jSpeed + jSpeed_F) * -1);
                }
                break;
            case 1: // bottom side of the screen
                x = Math.random() * canvas.width;
                y = canvas.height + radius;
                if (Math.random() > .5) {
                    vx = Math.random() * (jSpeed + jSpeed_F);
                } else {
                    vx = Math.random() * ((jSpeed + jSpeed_F) * -1);
                }
                vy = ((jSpeed + jSpeed_F) * -1);
                break;
            case 2: // right side of the screen
                x = canvas.width + radius
                y = Math.random() * canvas.height
                vx = ((jSpeed + jSpeed_F) * -1);
                if (Math.random() > .5) {
                    vy = Math.random() * (jSpeed + jSpeed_F);
                } else {
                    vy = Math.random() * ((jSpeed + jSpeed_F) * -1);
                }
                break;
            case 3: // top side of the screen
                x = Math.random() * canvas.width
                y = 0 - radius
                if (Math.random() > .5) {
                    vx = Math.random() * (jSpeed + jSpeed_F);
                } else {
                    vx = Math.random() * ((jSpeed + jSpeed_F) * -1);
                }
                vy = (jSpeed + jSpeed_F)
                break
            }
            // console.log(type)
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
            } else if (Math.random() < qRate) {
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
        }
    }   
}, 2500)

function launch() {
    if (torpedos.length < tCount && !paused){
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
        this.radius = 5;
        
    }
    shoot() {
        ctx.beginPath();
        ctx.arc(this.posit.x, this.posit.y, this.radius, 0, Math.PI * 2, false);
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

function cCollision(c1, c2){
    const xd = c2.posit.x - c1.posit.x;
    const yd = c2.posit.y - c1.posit.y;
    const td = Math.sqrt((xd * xd) + (yd * yd));
    // console.log('td: ' + td )
    if (td < c2.radius + c1.radius) {
        return true;
        
    } else {
        return false;
    }
    }
function updateLevel(){
    let newLevel = 1;
    if (score > 1000) {
        newLevel = Math.floor(score / 1000) + 1;

    }
    if (newLevel > level){
        level = newLevel
        let n;
        switch (level) {
            case 2:
                jSpeed = .5;
                jSpeed_F = .3;
                intJ = 2;
                qRate = .4;
                break;
            case 3:
                jSpeed = .5;
                jSpeed_F = .3;
                intJ = 2;
                qRate = .35;
                break;
            case 4:
                jSpeed = .75;
                jSpeed_F = .4;
                intJ = 2;
                qRate = .3;
                break;
            case 5:
                jSpeed = .75;
                jSpeed_F = .4;
                intJ = 3;
                qRate = .29;
                break;
            case 6:
                jSpeed = .75;
                jSpeed_F = .5;
                intJ = 3;
                qRate = .27;
                break;
            case 7:
                jSpeed = .75;
                jSpeed_F = .5;
                intJ = 4;
                qRate = .25;
                break;
            case 8:
                jSpeed = 1;
                jSpeed_F = .5;
                intJ = 4;
                qRate = .22;
                break;
            case 9:
                jSpeed = 1;
                jSpeed_F = .8;
                intJ = 4;
                qRate = .2;
                break;
            case 10:
                jSpeed = 1;
                jSpeed_F = .8;
                intJ = 5;
                qRate = .2;
                break;
            case 11:
                jSpeed = 1;
                jSpeed_F = .9;
                intJ = 5;
                qRate = .19;
                break;
            case 12:
                jSpeed = 1;
                jSpeed_F = 1;
                intJ = 5;
                qRate = .15;
                break;
            case 13:
                jSpeed = 1.25;
                jSpeed_F = 1;
                intJ = 5;
                qRate = .125;
                break;
            case 14:
                jSpeed = 1.25;
                jSpeed_F = 1;
                intJ = 6;
                qRate = .1;
                break;
            case 15:
                jSpeed = 1.5;
                jSpeed_F = 1;
                intJ = 6;
                qRate = .1;
                break;
            case 16:
                jSpeed = 1.5;
                jSpeed_F = 1;
                intJ = 7;
                qRate = .1;
                break;
            case 17:
                jSpeed = 1.5;
                jSpeed_F = 1;
                intJ = 8;
                qRate = .05;
                break;
            case 18:
                jSpeed = 1.5;
                jSpeed_F = 1;
                intJ = 10;
                qRate = .01;
                break;
            case 19:
                jSpeed = 1.5;
                jSpeed_F = 1;
                intJ = 12;
                qRate = .01; 
                break;
            case 20:
                jSpeed = 1.5;
                jSpeed_F = 1;
                intJ = 14;
                qRate = .01;
                break;
            case 21:
                jSpeed = 1.5;
                jSpeed_F = 1;
                intJ = 18;
                qRate = .01;
                break;
            case 22:
                jSpeed = 1.5;
                jSpeed_F = 1;
                intJ = 22;
                qRate = .01;
                break;
            case 23:
                jSpeed = 1.5;
                jSpeed_F = 1;
                intJ = 30;
                qRate = .01;
                break;
        }
    }
    ctx.font = "40px digitbold";
    ctx.fillText('Level: ' + level, 850, 40);
    
}
function updateScore(){
    ctx.font = "40px digitbold";
    ctx.fillStyle = 'deepskyblue';
    ctx.fillText('Score: ' + score, 25, 40);
    updateLevel();
}
function play() {
    if(paused){
        updateLevel()
    } else {
    window.requestAnimationFrame(play);
    }
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ship.move();
    for (let i = torpedos.length - 1; i >= 0; i--) {
        const torpedo = torpedos[i];
        torpedo.move();
        for (let j = junk.length - 1; j >= 0; j--) {
            const sjunk = junk[j];
            if(cCollision(torpedo, sjunk)) {
                if (sjunk.radius < 45){
                    if (sjunk.type == 1){
                        score += 25;
                    } else if(sjunk.type == 2){
                        score += 35;
                    } else {
                        score += 50;
                    }
                    junk.splice(j, 1);
                    
                } else {
                    sjunk.radius = (sjunk.radius * .5);
                    score += 10;
                }
                torpedos.splice(i, 1);
                // console.log('Score: ' + score)
            }
        }
        for (let q = qortal.length - 1; q >= 0; q--) {
            const qort = qortal[q];
            if(cCollision(torpedo, qort)) {
                qortal.splice(q, 1)
                torpedos.splice(i, 1)
            }
        }
        if (
            torpedo.posit.x + torpedo.radius < 0 ||
            torpedo.posit.x - torpedo.radius > canvas.width ||
            torpedo.posit.y + torpedo.radius < 0 ||
            torpedo.posit.y - torpedo.radius > canvas.height
        ) {
            torpedos.splice(i, 1)
        }
    }
    
    
    for (let i = junk.length - 1; i >= 0; i--) {
        const sjunk = junk[i];
        sjunk.move();
        
        if (sjunk.type == 2){
            let vx;
            let vy;
            let dy;
            let dx;
            if (Math.random() < mineF){
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
                    

                }))
                
            }
        }

        if (
            sjunk.posit.x + sjunk.radius < 0 ||
            sjunk.posit.x - sjunk.radius > canvas.width ||
            sjunk.posit.y + sjunk.radius < 0 ||
            sjunk.posit.y - sjunk.radius > canvas.height
        ) {
            junk.splice(i, 1)
            
        }
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
        for (let j = junk.length - 1; j >= 0; j--) {
            let sjunk = junk[j]
            if(cCollision(smine, sjunk)) {
                if (sjunk.radius < 45){
                  junk.splice(j, 1);
                } else {
                    sjunk.radius = (sjunk.radius * .5);
                    
                }
                mines.splice(i, 1);
            }
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
    updateScore();
}


ship.draw()

play()
function showTP(toolTip){
    toolTip.style.display = 'block';
}
function hideTP(toolTip){
    toolTip.style.display = '';
}