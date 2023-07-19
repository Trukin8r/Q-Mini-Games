let mute = false;
let target;
let keyP = "";
let wordFile = "./easywords.csv";
let regLet = /[a-zA-Z]/;
let secret;
let stage = 3;
let currentStage = 3;
let gamesPlayed = 0;
let gamesWon = 0;
let gamesSolved = 0;
let infoDisplayed = false;
let settingsDisplayed = false;
let diff = 'medium';


document.addEventListener('keydown', keyPress)
function keyPress(k, regex) {
    let char = k.key;
    console.log(char.length);
    if(char.length == 1) {
        if(regLet.test(char)) {
            char = char.toUpperCase();
            letterClick(char);
        }
    }
}
function startGame(){
    const SB = document.getElementById('startBox');
    SB.style.display = 'none'
    getWord()
}
function showTP(toolTip){
    // const toolTip = document.getElementsByClassName('toolTip');
    toolTip.style.display = 'block';
}
function hideTP(toolTip){
    // const toolTip = document.getElementByClassName('toolTip');
    toolTip.style.display = '';
}

function infoButton() {
    const info = document.getElementById('instructions');
    if (infoDisplayed == false) {
        info.style.display = 'block';
        infoDisplayed = true;
        console.log(infoDisplayed)
    } else {
        info.style.display = 'none';
        infoDisplayed = false;
        
    }
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
    let setDisp = document.getElementById('settingsCard');
    if (document.getElementById('startBox').style.display == 'none'){
        if (settingsDisplayed == true) {
            setDisp.style.display = 'none';
            settingsDisplayed = false;
        } else {
            setDisp.style.display = 'flex';
            settingsDisplayed = true;
        }
    }
}
function snowflakeButton() {
    // Need to show completed word and a continue button
    getWord() // Need to create and call a reset function
}
function selectDiff(d){
    diff = d
    if (settingsDisplayed == true) {
        document.getElementById('settingsCard').style.display = 'none';
        settingsDisplayed = false;
    }
}
function letterClick(l) {
    const input = document.getElementById('letter' + l);
    if(input.className == 'letterCard'){
        if(mute == false) {
            new Audio('./sounds/interface-button.mp3').play();
        }
        input.className = 'usedLetterCard';
        letterSolver(l);
        // stageUpdate();
        // checkSolved();
        // console.log('letter ' + l);
    }
}
function letterSolver(l) {
    let letterCorrect = false
    for(i=0; i < (secret.length); ++i){
        console.log(secret.charAt(i))
        if (l == secret.charAt(i)) {
            if (document.getElementById('letter' + (i + 1)).className == 'letterBlank') {
                document.getElementById('letter' + (i + 1)).innerHTML = l;
                document.getElementById('letter' + (i + 1)).className = 'letterSolved';
                letterCorrect = true
            }
        }
    }
    if (letterCorrect == true) {
        document.getElementById('letter' + l).style.backgroundColor = 'Green';
        stage++
        new Audio('./sounds/rightanswer.mp3').play();
        // setTimeout(stageUpdate, 2000);
        stageUpdate()
        // setTimeout(checkSolved, 2000);
        checkSolved()
    } else {
        document.getElementById('letter' + l).style.backgroundColor = 'Red';
        stage--
        new Audio('./sounds/wronganswer.mp3').play();
        // setTimeout(stageUpdate, 2000);
        stageUpdate()
    }
    
}
function checkSolved() {
    solved: {
        for(i = 1; i < (secret.length +1); i++) {
            if (document.getElementById('letter' + i).className == 'letterBlank') { break solved; }
        }
        setTimeout(solved, 1500);
    }
}
function solved() {
    new Audio('./sounds/success-fanfare-trumpets.mp3').play();
    alert('You Won')
}
function stageUpdate() {
    if (stage > 7) {stage = 7}
    if (stage != currentStage) {
        // if (currentStage < stage) {
        //         new Audio('./sounds/rightanswer.mp3').play();
        //     } else {
        //         new Audio('./sounds/wahwahwah.mp3').play();
        //     }    
    
    if (currentStage < 7 && currentStage > 0){
            document.getElementById('gameBoard').style.backgroundImage = "url('./images/Stage" + stage + ".png')"
            currentStage = stage
    }
    if (stage == 0) { youLose()}
            
            
        
    }
}
function youLose(){
    
}


function restart(){
    // need some work here to restart the game after a game completes or when the restart button is pressed
}

function getWord() {
    switch (diff) {
    case 'easy':
        secret = eWords[Math.floor((Math.random() * eWords.length) + 1)];
        break;
    case 'med':
        secret = mWords[Math.floor((Math.random() * mWords.length) + 1)];
        break;
    case 'hard':
        secret = hWords[Math.floor((Math.random() * hWords.length) + 1)];
        break;
    default:
        secret = mWords[Math.floor((Math.random() * mWords.length) + 1)];
    }
    console.log(secret);
    setWord(secret);
}

function setWord(w) {
    const gameArea = document.getElementById('gameArea');
    let letterBlank = document.createElement('div');
    while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild)
    }
    for(i=1; i < (w.length + 1); ++i){
        letterBlank.className = 'letterBlank';
        letterBlank.id = 'letter' + i;
        letterBlank.innerHTML = ' ';
        gameArea.appendChild(letterBlank.cloneNode(true));
    }
        
    }
