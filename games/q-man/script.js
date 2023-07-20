let mute = false;
let target;
let keyP = "";
const regLet = /[a-zA-Z]/;
let secret;
let stage = 3;
let currentStage = 3;
let gamesPlayed = 0;
let gamesWon = 0;
let gamesSolved = 0;
let infoDisplayed = false;
let settingsDisplayed = false;
let resultsDisplayed = false;
let diff = 'med';
let wins = 0;
let losses = 0;
let snowflakes = 0;
let isSolved = false;
let isSnowflake = false;
let rounds=0;
let seeker = "";
document.getElementById('confirmBox').style.display = 'none';
document.addEventListener('keydown', keyPress);
function keyPress(k, regex) {
    let char = k.key;
    if(char.length == 1) {
        if(regLet.test(char)) {
            char = char.toUpperCase();
            letterClick(char);
        }
    }
}
function startGame(){
    if (mute == false){new Audio('./sounds/interface-button.mp3').play();}
    const SB = document.getElementById('startBox');
    SB.style.display = 'none';
    getWord();
}
function showTP(toolTip){
    toolTip.style.display = 'block';
}
function hideTP(toolTip){
    toolTip.style.display = '';
}
function infoButton() {
    if (mute == false){new Audio('./sounds/interface-button.mp3').play();}
    const info = document.getElementById('instructions');
    if (infoDisplayed == false) {
        info.style.display = 'block';
        infoDisplayed = true;
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
    if (mute == false){new Audio('./sounds/interface-button.mp3').play();}
    seeker = 'cancel';
    document.getElementById('confirmBox').style.display = 'block';
        document.getElementById('confirmTitle').innerHTML = 'Do You Really Want To Quit Q-Man?';
        document.getElementById('confirmText').innerHTML = 'Quitting Q-man will return you to the Q - Mini Games main menu. All of your stats will be lost!!!';
        document.getElementById('confirmNo').innerHTML = 'Keep Playing!';
        document.getElementById('confirmYes').innerHTML = 'Let Me Out!';
        killLetters();
}
function cancelYes() {
    window.location='/Q-Mini-Games/index.html';
}
function cancelNo() {
    reviveLetters();
}
function restartButton() {
    if (mute == false){new Audio('./sounds/interface-button.mp3').play();}
    if (document.getElementById('startBox').style.display == 'none' && resultsDisplayed == false && document.getElementById('confirmBox').style.display == 'none') {
        seeker = 'restart';
        document.getElementById('confirmBox').style.display = 'block';
        document.getElementById('confirmTitle').innerHTML = 'Do You Really Want To Restart Q-Man?';
        document.getElementById('confirmText').innerHTML = 'Restarting will not reveal the secret word. The computer will select a new word and a new game will start. If you restart, this game will not be counted in your stats';
        document.getElementById('confirmNo').innerHTML = 'Keep Playing!';
        document.getElementById('confirmYes').innerHTML = 'Gimme A New Word!';
        killLetters();
    }
}
function restartYes() {
    
    gamesPlayed--;
    resetLetters();
    restart();
}
function restartNo() {
    reviveLetters();
}
function settingsButton() {
    if (mute == false){new Audio('./sounds/interface-button.mp3').play();}
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
    if (mute == false){new Audio('./sounds/interface-button.mp3').play();}
    if (document.getElementById('startBox').style.display == 'none' && settingsDisplayed == false && resultsDisplayed == false && document.getElementById('confirmBox').style.display == 'none') {
        killLetters();
        document.getElementById('confirmBox').style.display = 'block';
        document.getElementById('confirmTitle').innerHTML = 'Are You A Snowflake???';
        document.getElementById('confirmText').innerHTML = 'Confirming that you are a snowflake will stop the game here and reveal the secret word. This will be counted as a snowflake and has the same impact on your percentage stat as a loss.';
        document.getElementById('confirmNo').innerHTML = 'No Way!';
        document.getElementById('confirmYes').innerHTML = 'I sure Am!';
        seeker = 'snowflake';
        
    }
}
function snowflakeYes() {
    fillWord();
    isSolved = false;
    isSnowflake = true;
    snowflakes++;
    setTimeout(displayResults, 1000);
}
function snowflakeNo() {
    reviveLetters();
}
function confirmYes() {
    if (mute == false){new Audio('./sounds/interface-button.mp3').play();}
    document.getElementById('confirmBox').style.display = 'none';
    switch (seeker) {
        case 'snowflake':
            snowflakeYes();
            break;
        
        case 'restart':
            restartYes();
            break;

        case 'cancel':
            cancelYes();
            break;

        default:

    }
    seeker = "";
}
function confirmNo() {
    if (mute == false){new Audio('./sounds/interface-button.mp3').play();}
    document.getElementById('confirmBox').style.display = 'none';
    switch (seeker) {
        case 'snowflake':
            snowflakeNo();
            break;
        
        case 'restart':
            restartNo();
            break;

        case 'cancel':
            cancelNo();
            break;

        default:
            
    }
    seeker = "";
}
function killLetters() {
    let l;
    for(i = 65; i < 91; i++){
        l = String.fromCharCode(i);
        if (document.getElementById('letter' + l).className == "letterCard"){
            document.getElementById('letter' + l).className = "killedLetterCard";
        }

    }
}
function reviveLetters() {
    let l;
    for(i = 65; i < 91; i++){
        l = String.fromCharCode(i);
        if (document.getElementById('letter' + l).className == "killedLetterCard"){
            document.getElementById('letter' + l).className = "letterCard";
        }

    }
}
function resetLetters() {
    let l;
    for(i = 65; i < 91; i++){
        l = String.fromCharCode(i)
        document.getElementById('letter' + l).className = "letterCard";
        document.getElementById('letter' + l).style.backgroundColor = "";


    }
}

function fillWord() {
    let l = "";
    for(i = 0; i < (secret.length); i++) {
        l = secret.charAt(i);
        
        if (document.getElementById('letter' + (i + 1)).className == 'letterBlank') {
            document.getElementById('letter' + (i + 1)).innerHTML = l; 
            document.getElementById('letter' + (i + 1)).style.borderBottomColor = 'red';
            document.getElementById('letter' + (i + 1)).style.color = 'red';
        }
    }
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
        if(mute == false) {new Audio('./sounds/interface-button.mp3').play();}
        input.className = 'usedLetterCard';
        letterSolver(l);
        
    }
}
function letterSolver(l) {
    let letterCorrect = false;
    for(i=0; i < (secret.length); ++i){
        if (l == secret.charAt(i)) {
            if (document.getElementById('letter' + (i + 1)).className == 'letterBlank') {
                document.getElementById('letter' + (i + 1)).innerHTML = l;
                document.getElementById('letter' + (i + 1)).className = 'letterSolved';
                letterCorrect = true;
            }
        }
    }
    if (letterCorrect == true) {
        document.getElementById('letter' + l).style.backgroundColor = 'Green';
        stage++;
        if (mute == false){new Audio('./sounds/rightanswer.mp3').play();}
        stageUpdate();
        checkSolved();
    } else {
        document.getElementById('letter' + l).style.backgroundColor = 'Red';
        stage--;
        if (mute == false){new Audio('./sounds/wronganswer.mp3').play();}
        stageUpdate();
    }
    
}
function checkSolved() {
    solved: {
        for(i = 1; i < (secret.length +1); i++) {
            if (document.getElementById('letter' + i).className == 'letterBlank') { break solved; }
        }
        solved = true;
        setTimeout(solver(), 1500);
    }
}
function solver() {
    isSolved = true;
    displayResults();
}
function stageUpdate() {
    
    if (stage > 7) {stage = 7;}
    if (stage != currentStage) {
        if (currentStage < 8 && currentStage >= 0){
                document.getElementById('gameBoard').style.backgroundImage = "url('./images/Stage" + stage + ".png')";
                currentStage = stage;
        } else {
            currentStage = stage;
        }
        if (stage == 0) { youLose()}
    }
}
function youLose(){
    document.getElementById('gameBoard').style.backgroundImage = "url('./images/Stage0.png";
    currentStage = 0
    fillWord();
    displayResults();
}
function restart(){
    currentStage = 0;
    resetLetters();
    getWord();
    isSnowflake = false;
    isSolved = false;
}
function getWord() {
    gamesPlayed++;
    switch (diff) {
    case 'easy':
        secret = eWords[Math.floor((Math.random() * eWords.length) + 1)];
        stage = 5;
        break;
    case 'med':
        secret = mWords[Math.floor((Math.random() * mWords.length) + 1)];
        stage = 4;
        break;
    case 'hard':
        secret = hWords[Math.floor((Math.random() * hWords.length) + 1)];
        stage = 3;
        break;
    default:
        secret = mWords[Math.floor((Math.random() * mWords.length) + 1)];
    }
    console.log(secret);
    setWord(secret);
    stageUpdate();
}
function displayResults() {
    resultsDisplayed = true;
    setTimeout(isWinner(), 1000);
    document.getElementById('playAgain').style.display = 'block';
    document.getElementById('playAgainButton').focus();
}
function isWinner() {
    let message = document.getElementById('message');
    const winnerArray = ['Winner Winner Winner!', 'Cangratulations! You Won!', "You're A Real Winner!", 'Winner, Winner, Chicken Dinner', 'You Win, Qortal Wins!', 'We Have A Winner!'];
    let blurb = document.getElementById('blurb');
    let p; // win percentage
    let ls; //losses
    if (isSolved == true && currentStage == 7) {
        wins++;
        document.getElementById('message').innerHTML = winnerArray[Math.floor((Math.random() * winnerArray.length))];
        document.getElementById('blurb').innerHTML = 'Great job! Thanks to your help, Q-man has been able to activate enough nodes that Qortal can never be shut down.';
        if (mute == false){
            new Audio('./sounds/success-fanfare-trumpets.mp3').play();
        }
    } else if (isSolved == true && currentStage < 7 && currentStage > 0) {
        message.innerHTML = 'You Came So Close!';
        blurb.innerHTML = 'You discovered the secret word, but Qortal still needs more nodes! Try again and see if you can help Q-man get all of the nodes activated.';
        if (mute == false){new Audio('./sounds/wahwahwah.mp3').play();}
    } else if (isSnowflake == true){
        document.getElementById('message').innerHTML = 'Sorry, Snowflakes Never Win!';
        document.getElementById('blurb').innerHTML = '';
        if (mute == false){new Audio('./sounds/wahwahwah.mp3').play();}
    } else if (currentStage == 0) {
        message.innerHTML = 'Oh Sorry, You Lost!';
        blurb.innerHTML = 'Please try again! Qortal needs your help to get more nodes up and running';
        if (mute == false){new Audio('./sounds/wahwahwah.mp3').play();}
    } else {message.innerHTML = 'ERROR: 5B29d1s';}
    if(gamesPlayed == wins && gamesPlayed > 0) {
        p = 100;
    }else if (gamesPlayed >0) {
        p = Math.floor((wins / gamesPlayed) * 100);
    } else {p=0;}
    if(isNaN(gamesPlayed - (wins + snowflakes))) {
        ls = 0;
    } else {ls = (gamesPlayed - (wins + snowflakes))}
    document.getElementById('statGames').innerHTML = gamesPlayed;
    document.getElementById('statWins').innerHTML = wins;
    document.getElementById('statLosses').innerHTML = ls;
    document.getElementById('statSnowflakes').innerHTML = snowflakes;
    document.getElementById('statPercent').innerHTML = p + '%';
     
}
function playAgain() {
    if (mute == false){new Audio('./sounds/interface-button.mp3').play();}
    document.getElementById('playAgain').style.display = 'none';
    resultsDisplayed = false;
    restart();
}
function runAway() { window.location = '/Q-Mini-Games/index.html';}
function setWord(w) {
    const gameArea = document.getElementById('gameArea');
    let letterBlank = document.createElement('div');
    while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild);
    }
    for(i=1; i < (w.length + 1); ++i){
        letterBlank.className = 'letterBlank';
        letterBlank.id = 'letter' + i;
        letterBlank.innerHTML = ' ';
        gameArea.appendChild(letterBlank.cloneNode(true));
    }
    resetLetters();   
    }
