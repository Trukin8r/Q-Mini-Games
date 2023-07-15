let mute = false;
let target;


function infoButton() {
    
}
function muteButton() {
    if(mute == false) {
        mute = true;
        document.getElementById('muteImg').src = './images/AudioOffButton.png';
    } else {
        mute = false;
        document.getElementById('muteImg').src = './images/AudioButton.png';
    }
}
function cancelButton() {
    if(confirm('Do you really want to quit Q-Man and return to the Q - Mini Games menu?')){
        window.location='/Q-Mini-Games/index.html';
    }

}
function restartButton() {
    if(confirm('Do you really want to lose your progress and restart Q-Man with a new word?')){
        restart()
    }
}
function settingsButton() {

}
function snowflakeButton() {
    
}

function letterClick(l) {
    if(mute == false){ new Audio('./sounds/rclick-13693.mp3').play()}
    console.log(l);
}



function restart(){
    // need some work here to restart the game after a game completes or when the restart button is pressed
}