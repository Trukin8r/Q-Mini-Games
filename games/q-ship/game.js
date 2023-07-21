const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1020;
canvas.height = 600;

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height);

class Ship {
    constructor({ posit, velo }) {
        this.posit = posit
        this.velo = velo
    }

    draw() {
        ctx.arc(this.posit.x, this.posit.y, 5, 0, Math.PI * 2, true);
        ctx.fillStyle = 'dodgerblue';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.posit.x + 30, this.posit.y);
        ctx.lineTo(this.posit.x - 10, this.posit.y - 10);
        ctx.lineTo(this.posit.x - 10, this.posit.y + 10);
        ctx.closePath();
        ctx.strokeStyle= 'lightblue';
        ctx.stroke();
    }
}

const ship = new Ship({
    posit: { x: canvas.width / 2, y: canvas.height / 2 },
    velo: { x: 0, y: 0 },
})

console.log(ship)

ship.draw()


function showTP(toolTip){
    toolTip.style.display = 'block';
}
function hideTP(toolTip){
    toolTip.style.display = '';
}