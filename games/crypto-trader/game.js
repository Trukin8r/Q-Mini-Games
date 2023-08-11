const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const BasicPC = new Image()
BasicPC.src = './images/BasicPC.png'
let mute = false;
const tempIntro = 'Welcome to Crypto-Trader.'
const tempInst = 'Do you need instructions? (y/n)'
let introdisplayed = false
let counter = 0;
let tempText = '';
let instInt;
let inst ='';
let cursorInt;
let cursorOn = false;
let dx = 100;
let dy = 115;

canvas.height = 598;
canvas.width = 1014;
// ctx.fillStyle = 'black';
// ctx.fillRect(0, 0, canvas.width, canvas.height);
let winclick = window.addEventListener('click', (e) => {
    console.log (winclick);
    console.log ('x: ' + e.clientX);
    console.log ('y: ' + e.clientY);
    console.log(e)
})


window.addEventListener('keyup', (e) => {
    switch (e.code) {
        case 'KeyY':
            if (introdisplayed) beginningIntructions();
            BasicDisplayReset();
            break;
        case 'KeyN':
            if (introdisplayed) gameStart();
        
    }
    // console.log(e)
});

BasicPC.onload = function(){
ctx.drawImage(BasicPC, -3, -3)
}
function BasicDisplay(incomingText, cursorAfter){
    const dText = incomingText;
    dCount = 0;
    ctx.fillStyle = '#33FF33';
    ctx.font = '16px basicPC';
    const dInt = setInterval(function (){
        if (dCount > dText.length){
            clearInterval(dInt);
            if(cursorAfter) setInterval(animateCursor, 350);
        }
        ctx.fillText(dText.charAt(dCount), dx, dy);
        dx +=18;
        if(dx > 900){
            if (dText.charAt(dCount) != ' ') ctx.fillText('-', dx, dy)
            dx = 100;
            dy += 20;
        }
        dCount++
    }, 100)
    
}
function BasicDisplayReset(){
    ctx.drawImage(BasicPC, -3, -3)
    dx = 100;
    dy = 115;
}
BasicDisplay(tempIntro + ' ' + tempInst, true)
function tempDisplayWelcome(){

}
// function tempDisplayIntro () {
//     console.log(tempIntro.length)
//     if (counter < tempIntro.length){
//         tempText = tempText + tempIntro.charAt(counter);
//         ctx.fillStyle = '#33FF33';
//         ctx.font = '16px basicPC';
//         ctx.fillText(tempText, 100, 115);
//         console.log('tempText: ' + tempText);
//         console.log('Counter: ' + counter);
//         counter++
//     } else {
//         clearInterval(tempInt);
//         counter = 0
//         instInt = setInterval(tempDisplayInst, 200);
//     }
// }
// const tempInt = setInterval(tempDisplayIntro, 200);
// function tempDisplayInst() {
//     if(counter < tempInst.length) {
//         inst = inst + tempInst.charAt(counter);
//         ctx.fillStyle = '#33FF33';
//         ctx.font = '16px basicPC';
//         ctx.fillText(inst, 100, 135);
//         counter++
//     } else {
//         clearInterval(instInt);
//         counter = 0
//         cursorInt = setInterval(animateCursor, 350);
//         introdisplayed = true
//     } 
//}
function animateCursor(){
    if (cursorOn) {
        ctx.fillStyle = '#000000';
        ctx.font = '16px basicPC';
        ctx.fillText('_', dx - 36, dy);
        
    } else {
        ctx.fillStyle = '#33FF33';
        ctx.font = '16px basicPC';
        ctx.fillText('_', dx - 36, dy);
    }
    cursorOn = !cursorOn;
    

}
function beginningIntructions(){
    displayIntructions()
}
function displayIntructions(){

}
function gameStart(){

}

function showTP(toolTip) {
    toolTip.style.display = 'block';
}
function hideTP(toolTip) {
    toolTip.style.display = '';
}
function muteButton() {
    mute = (!mute);
    if(mute){
        document.getElementById('muteImg').src = './images/AudioOffButton.png';
    } else {
        document.getElementById('muteImg').src = './images/AudioButton.png'
        if(!mute) new Audio('./sounds/interface-button.mp3').play();
    }
}