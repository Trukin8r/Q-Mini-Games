let mute = false;
let target;
let keyP = "";
let wordFile = "./easywords.csv";
let regLet = /[a-zA-Z]/;
let secret;

document.addEventListener('keydown', keyPress)
// document.addEventListener('keyup', keyPress(keyP))
function keyPress(k, regex) {
    // let targetK = k.currentTarget;
    let char = k.key;
    console.log(char.length);
    if(char.length == 1) {
        if(regLet.test(char)) {
            char = char.toUpperCase();
            letterClick(char);
        }
    }
}
function infoButton() {
    
}
function muteButton() {
    if(mute == false) {
        mute = true;
        document.getElementById('muteImg').src = './images/AudioOffButton.png';
    } else {
        mute = false;
        document.getElementById('muteImg').src = './images/AudioButton.png';
        new Audio('./sounds/interface-button.mp3').play();
    }
}
function cancelButton() {
    if(confirm('Do you really want to quit Q-Man and return to the Q - Mini Games menu?')){
        window.location='/Q-Mini-Games/index.html';
    }

}
function restartButton() {
    if(confirm('Do you really want to lose your progress and restart Q-Man with a new word?')){
        restart();
    }
}
function settingsButton() {

}
function snowflakeButton() {
    getWord()
}

function letterClick(l) {
    const input = document.getElementById('letter' + l);
    if(input.className == 'letterCard'){
        if(mute == false) {
            new Audio('./sounds/interface-button.mp3').play();
        }
        input.className = 'usedLetterCard';
        letterSolver(l);

        console.log(l);
    }
}



function restart(){
    // need some work here to restart the game after a game completes or when the restart button is pressed
}

function getWord() {
    secret = mWords[Math.floor((Math.random() * mWords.length) + 1)];
    console.log(secret);
    setWord(secret);
}

function setWord(w) {
    const gameArea = document.getElementById('gameArea');
    let letterBlank = document.createElement('div');
    while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild)
    }
    console.log(w.length)
    for(i=1; i < (w.length + 1); ++i){
        letterBlank.className = 'letterBlank';
        letterBlank.id = 'letter' + i;
        letterBlank.innerHTML = ' ';
        gameArea.appendChild(letterBlank.cloneNode(true));
        console.log(letterBlank.id)
        console.log(gameArea.childNodes)
    }
        
    }
