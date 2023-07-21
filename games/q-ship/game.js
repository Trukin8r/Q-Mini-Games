const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 1020;
canvas.height = 600;

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height);

function showTP(toolTip){
    toolTip.style.display = 'block';
}
function hideTP(toolTip){
    toolTip.style.display = '';
}