

let computerSelection; //for output of getcomputerchoice() function
let playerSelection = "" ; //for output of getPlayerChoice() function
let currentRound = 0; // counter for current round in playRound() function
let rounds; // total number of rounds to be played - obtained from user input
let result; // stores the results string after both selections have been compared
let wins = 0; //stores number of wins per game used to calculate win/loss percentage
let ties = 0; //stores number of tie rounds, used to calculate win/loss percentage
let computerRandomSelector = 0;
let taunt="";
let resultImg = "";
let resultTtl = "";
let compResultImg = "";
let playResultImg = "";
let playerWin = false;
let computerWin = false;
const roundsClicked = document.querySelector("#roundsSelect");
roundsClicked.addEventListener("click", function(e){
    let targetClick = "";
    rounds = 0; 
    currentRound = 1;
    if(e.target.parentElement.className == "roundsClick"){
        targetClick =  e.target.parentElement;
    } else {
        targetClick = e.target;
    }
    
    if ( targetClick.className == "roundsClick"){
       if (targetClick.id == "rounds100"){
            rounds = 100;
        } else if (targetClick.id == "rounds10"){
            rounds = 10;
        } else if (targetClick.id == "rounds25"){
            rounds = 25;
        } else if (targetClick.id == "rounds5"){
            rounds = 5;
        } else {
            rounds = 0;
        }
    } else {
        rounds=0;
    }
    if (rounds > 0){
        document.getElementById('startup').className = "hide";
        document.getElementById('playersTurn').className = "show";
    }
});

function BGalt() {
    document.getElementById('BGimg').src = "./images/BGJC.png"
}
function BGreg() {
    document.getElementById('BGimg').src = "./images/BGJ.png"
}
function FCalt() {
    document.getElementById('FCimg').src = "./images/fiat-wow.png"
}
function FCreg() {
    document.getElementById('FCimg').src = "./images/money-smile.png"
}
function BTalt() {
    document.getElementById('BTimg').src = "./images/BTF.png"
}
function BTreg() {
    document.getElementById('BTimg').src = "./images/BTG.png"
}
function QCalt() {
    document.getElementById('QCimg').src = "./images/Qcube.png"
}
function QCreg() {
    document.getElementById('QCimg').src = "./images/Qhex.png"
}

function BGselect() {
    playerSelection = "Big Government";
    PlayResultImg = "./images/BGJC.png";
    getComputerChoice()
}
function FCselect() {
    playerSelection = "Fiat Currencies";
    PlayResultImg = "./images/fiat-wow.png";
    getComputerChoice()
}
function BTselect() {
    playerSelection = "Big Tech";
    PlayResultImg = "./images/BTM.png";
    getComputerChoice()
}
function Qselect() {
    playerSelection = "Qortal";
    PlayResultImg = "./images/Qcube.png";
    getComputerChoice()
}
function getComputerChoice() {
    document.getElementById('playersTurn').className = "hide";
    document.getElementById('computersTurn').className = "show";
    let choice = Math.floor(Math.random() *4) +1;
    if (choice === 1){
        computerSelection = "Big Government";
        compResultImg = "./images/BGJC.png";
    } else if (choice === 2){
        computerSelection = "Fiat Currencies";
        compResultImg = "./images/fiat-wow.png";
    } else if (choice === 3){
        computerSelection = "Big Tech";
        compResultImg = "./images/BTM.png";
    } else {
        computerSelection = "Qortal";
        compResultImg = "./images/Qcube.png";
    }
    setTimeout(cTimer1, 750);
    setTimeout(cTimer2, 1500);
    setTimeout(cTimer3, 2250);
    setTimeout(cTimer4, 3000);
    setTimeout(cTimer5, 3750);
    setTimeout(cTimer6, 4500);
    setTimeout(cTimer7, 5250);
    setTimeout(cTimer8, 6000);
    setTimeout(cTimer9, 6750);
    setTimeout(cTimer0, 7500);

}
function cTimer1() {
    computerRandomSelector = Math.floor(Math.random() *8) +1;
    randomSelector(computerRandomSelector);
}
function cTimer2() {
    computerRandomSelector = Math.floor(Math.random() *8) +1;
    randomSelector(computerRandomSelector);
}
function cTimer3() {
    computerRandomSelector = Math.floor(Math.random() *8) +1;
    randomSelector(computerRandomSelector);
}
function cTimer4() {
    computerRandomSelector = Math.floor(Math.random() *8) +1;
    randomSelector(computerRandomSelector);
}
function cTimer5() {
    computerRandomSelector = Math.floor(Math.random() *8) +1;
    randomSelector(computerRandomSelector);
}
function cTimer6() {
    computerRandomSelector = Math.floor(Math.random() *8) +1;
    randomSelector(computerRandomSelector);
}
function cTimer7() {
    computerRandomSelector = Math.floor(Math.random() *8) +1;
    randomSelector(computerRandomSelector);
}
function cTimer8() {
    computerRandomSelector = Math.floor(Math.random() *8) +1;
    randomSelector(computerRandomSelector);
}
function cTimer9() {
    document.getElementById("ccImg").src = compResultImg;
    document.getElementById("ccText").innerHTML = computerSelection;
    document.getElementById("ccCard").style = "background-color: PaleGreen";
}
function cTimer0() {
    document.getElementById('computersTurn').className = "hide";
    document.getElementById('results').className = "show";
    getResult();
    postResult();
}

function randomSelector(){
    
    switch(computerRandomSelector) {
        case 1:
            if(document.getElementById("ccImg").src == "./images/BGJ.png"){
                computerRandomSelector = Math.floor(Math.random() *8) +1;
                randomSelector(computerRandomSelector);  
            } else {
                document.getElementById("ccImg").src = "./images/BGJ.png";
                document.getElementById("ccText").innerHTML = "Big Government"
            break;
            }
        
        case 2:
            if(document.getElementById("ccImg").src == "./images/BGJC.png"){
                computerRandomSelector = Math.floor(Math.random() *8) +1;
                randomSelector(computerRandomSelector);  
            } else {
                document.getElementById("ccImg").src = "./images/BGJC.png";
                document.getElementById("ccText").innerHTML = "Big Government"
            break;
            }

        case 3:
            if(document.getElementById("ccImg").src == "./images/BTF.png"){
                computerRandomSelector = Math.floor(Math.random() *8) +1;
                randomSelector(computerRandomSelector);  
            } else {
                document.getElementById("ccImg").src = "./images/BTF.png";
                document.getElementById("ccText").innerHTML = "Big Tech";
            break;
            }

        case 4:
            if(document.getElementById("ccImg").src == "./images/BTG.png"){
                computerRandomSelector = Math.floor(Math.random() *8) +1;
                randomSelector(computerRandomSelector);  
            } else {
                document.getElementById("ccImg").src = "./images/BTG.png";
                document.getElementById("ccText").innerHTML = "Big Tech";
            break;
            }
            
        case 5:
            if(document.getElementById("ccImg").src == "./images/fiat-wow.png"){
                computerRandomSelector = Math.floor(Math.random() *8) +1;
                randomSelector(computerRandomSelector);  
            } else {
                document.getElementById("ccImg").src = "./images/fiat-wow.png";
                document.getElementById("ccText").innerHTML = "Fiat Currencies";
            break;
            }
            
        case 6:
            if(document.getElementById("ccImg").src == "./images/money-smile.png"){
                computerRandomSelector = Math.floor(Math.random() *8) +1;
                randomSelector(computerRandomSelector);  
            } else {
                document.getElementById("ccImg").src = "./images/money-smile.png";
                document.getElementById("ccText").innerHTML = "Fiat Currencies";
            break;
            }
            
        case 7:
            if(document.getElementById("ccImg").src == "./images/Qcube.png"){
                computerRandomSelector = Math.floor(Math.random() *8) +1;
                randomSelector(computerRandomSelector);  
            } else {
                document.getElementById("ccImg").src = "./images/Qcube.png";
                document.getElementById("ccText").innerHTML = "Qortal!";
            break;
            }
            
        case 8:
            if(document.getElementById("ccImg").src == "./images/Qhex.png"){
                computerRandomSelector = Math.floor(Math.random() *8) +1;
                randomSelector(computerRandomSelector);  
            } else {
                document.getElementById("ccImg").src = "./images/Qhex.png";
                document.getElementById("ccText").innerHTML = "Qortal!";
            break;
            }
    }
        
}

function getResult() {
    
    if (computerSelection === "Big Government") {
        switch(playerSelection) {
            case "Big Government":
                ++ties;
                resultTtl = "Tie!!!";
                compResultImg = "./images/BGJ.png";
                playResultImg = "./images/BGJC.png";
                playerWin = undefined;
                computerWin = undefined;
                taunt = "Yep, Big Government breeds even bigger government.";
                break;
                        
            case"Fiat Currencies":
                resultTtl = "Your 401k is ashamed of you!";
                compResultImg = "./images/BGJC.png";
                playResultImg = "./images/fiat-loser.png";
                playerWin = false;
                computerWin = true;
                taunt = "Relax! The Big Government will devalue your Fiat soon enough";
                break;

            case "Big Tech":
                resultTtl = "Don't Quit Your Day Job!";
                compResultImg = "./images/BGJC.png";
                playResultImg = "./images/BT-loser.png";
                playerWin = false;
                computerWin = true;
                taunt = "Come on, man! Big Governemnt's got F-15s & nukes";
                break;

            case "Qortal":
                ++wins;
                resultTtl = "Winner - Winner - Winner";
                compResultImg = "./images/BGJC.png";
                playResultImg = "./images/Qcube.png";
                playerWin = true;
                computerWin = false;
                taunt = "That's right, Big Government can't stop Qortal!";
                break;

        }
    }else if (computerSelection === "Fiat Currencies"){
        switch(playerSelection) {
            case "Big Government":
                resultTtl = "What A Loser!";
                compResultImg = "./images/money-smile.png";
                playResultImg = "./images/BG-lose.png";
                playerWin = false;
                computerWin = true;
                taunt = "Sorry, Big Government always sells out.";
                break;
                        
            case"Fiat Currencies":
                ++ties;
                resultTtl = "Lose/Lose is a tie... I guess?";
                compResultImg = "./images/money-smile.png";
                playResultImg = "./images/fiat-wow.png";
                playerWin = undefined;
                computerWin = undefined;
                taunt = "Fiat plus more Fiat still equals fake money.";
                break;

            case "Big Tech":
                resultTtl = "Get A Real Job, Loser!";
                compResultImg = "./images/fiat-wow.png";
                playResultImg = "./images/BT-loser.png";
                playerWin = false;
                computerWin = true;
                taunt = "Big Tech with a whole lotta Fiat... What could go wrong?";
                break;

            case "Qortal":
                ++wins;
                resultTtl = "Great Strategy";
                compResultImg = "./images/fiat-loser.png";
                playResultImg = "./images/Qcube.png";
                playerWin = true;
                computerWin = false;
                taunt = "With a wallet full of Qort, who needs Fiat?";
                break;

        }
    }else if(computerSelection === "Big Tech") {
        switch(playerSelection) {
            case "Big Government":
                resultTtl = "Sorry, Not Sorry - You Lost!";
                compResultImg = "./images/BTM.png";
                playResultImg = "./images/BGJC.png";
                playerWin = false;
                computerWin = true;
                taunt = "Your Big Government will be replaced by an AI very soon.";
                break;
                        
            case"Fiat Currencies":
                resultTtl = "Kiss your cash goodbye, Loser!";
                compResultImg = "./images/BTG.png";
                playResultImg = "./images/fiat-loser.png";
                playerWin = false;
                computerWin = true;
                taunt = "Big Tech will gobble your Fiat faster than Joe Biden falls up the stairs.";
                break;

            case "Big Tech":
                ++ties;
                resultTtl = "Are You Insane?!?!?!";
                compResultImg = "./images/BTF.png";
                playResultImg = "./images/BTM.png";
                playerWin = undefined;
                computerWin = undefined;
                taunt = "Big Tech in bed with Big Tech is a Big Bad Idea!";
                break;

            case "Qortal":
                ++wins
                resultTtl = "Winner, Winner Chicken Dinner!";
                compResultImg = "./images/BT-loser.png";
                playResultImg = "./images/Qcube.png";
                playerWin = true;
                computerWin = false;
                taunt = "Qortal is the ONLY Big Tech proof platform around.";
                break;


        }
    } else if(computerSelection === "Qortal") {
        switch(playerSelection) {
            case "Big Government":
                resultTtl = "Lose, Lose, Lose!";
                compResultImg = "./images/Qcube.png";
                playResultImg = "./images/BG-lose.png";
                playerWin = false;
                computerWin = true;
                taunt = "Nope, Qortal cannot be stopped by Big Government.";
                break;
                        
            case"Fiat Currencies":
                resultTtl = "Ouch! That Loss Must Hurt!";
                compResultImg = "./images/Qcube.png";
                playResultImg = "./images/fiat-loser.png";
                playerWin = false;
                computerWin = true;
                taunt = "Sorry, Qortal ain't for sale at any price.";
                break;

            case "Big Tech":
                resultTtl = "Ha, Ha - You Lose!";
                compResultImg = "./images/Qcube.png";
                playResultImg = "./images/BT-loser.png";
                playerWin = false;
                computerWin = true;
                taunt = "Qortal is immune to Big Tech's dumb tricks.";
                break;

            case "Qortal":
                ++wins
                resultTtl = "Truly A WIN / WIN!!!";
                compResultImg = "./images/Qhex.png";
                playResultImg = "./images/Qcube.png";
                playerWin = true;
                computerWin = true;
                taunt = "When we all use Qortal - Everybody WINS!";
                break;

        }
            

    }
}
function postResult() {
    const m = (currentRound - ties) - wins;
    let p = ((wins / currentRound) * 100);
    p = p.toFixed(0)
    document.getElementById("pResultImage").src = playResultImg;
    document.getElementById("cResultImage").src = compResultImg;
    document.getElementById("pChoice").innerHTML = playerSelection;
    document.getElementById("cChoice").innerHTML = computerSelection;
    document.getElementById("rTitle").innerHTML = resultTtl;
    document.getElementById("rTaunt").innerHTML = taunt;
    document.getElementById("displayWins").innerHTML = "Wins: " + wins;
    if (currentRound == ties || currentRound == wins){
        document.getElementById("displayLosses").innerHTML = "Losses: 0";
    } else {
        document.getElementById("displayLosses").innerHTML = "Losses: " + m;
    }
    document.getElementById("displayTies").innerHTML = "Ties: " + ties;
    if (currentRound == wins){
        document.getElementById("displayPercent").innerHTML = "Win Percentage: 100%";
    } else if (wins == 0) {
        document.getElementById("displayPercent").innerHTML = "Win Percentage: 0%";
    } else {
        document.getElementById("displayPercent").innerHTML = "Win Percentage: " + p + "%";
    }
    if (playerWin == true && computerWin == false) {
        document.getElementById("displayWins").style.color = "Green";
        document.getElementById("playersResultCard").style.backgroundColor = "LightGreen";
        document.getElementById("ComputersResultCard").style.backgroundColor = "LightCoral";
    } else if (playerWin == false){
        document.getElementById("displayLosses").style.color = "Red";
        document.getElementById("playersResultCard").style.backgroundColor = "LightCoral";
        document.getElementById("ComputersResultCard").style.backgroundColor = "LightGreen";
    } else if (playerWin == true && computerWin == true) {
        document.getElementById("displayWins").style.color = "Green";
        document.getElementById("playersResultCard").style.backgroundColor = "LightGreen";
        document.getElementById("ComputersResultCard").style.backgroundColor = "LightGreen";
        document.getElementById("rTitle").style.color = "DarkGreen";
        document.getElementById("rTaunt").style.color = "DarkGreen";
    } else {
        document.getElementById("displayTies").style.color = "Yellow";
        document.getElementById("playersResultCard").style.backgroundColor = "Khaki";
        document.getElementById("ComputersResultCard").style.backgroundColor = "Khaki";
    }
    
}
function CBclick(){
    if(currentRound == rounds) {
        postFinalResults();
    } else {
        ++currentRound
        document.getElementById("displayWins").style.color = "";
        document.getElementById("displayTies").style.color = "";
        document.getElementById("displayLosses").style.color = "";
        document.getElementById("playersResultCard").style.backgroundColor = "";
        document.getElementById("ComputersResultCard").style.backgroundColor = "";
        document.getElementById("rTitle").style.color = "";
        document.getElementById("rTaunt").style.color = "";
        document.getElementById("ccCard").style = "";
        document.getElementById("results").className = "hide";
        document.getElementById("playersTurn").className = "show";
        
    }
}
function postFinalResults() {
    const m = (currentRound - ties) - wins;
    let p = ((wins / currentRound) * 100);
    p = p.toFixed(0)
    document.getElementById("results").className = "hide";
    document.getElementById("inputArea").className = "hide";
    document.getElementById("finalResult").className = "show";

    document.getElementById("finalWins").innerHTML = "Wins: " + wins;
    document.getElementById("finalLosses").innerHTML = "Losses: " + m;
    document.getElementById("finalTies").innerHTML = "Ties: " + ties;
    document.getElementById("finalPercent").innerHTML = "Win Percentage: " + p + "%";
    document.getElementById("displayWins").style.color = "";
        document.getElementById("displayTies").style.color = "";
        document.getElementById("displayLosses").style.color = "";
        document.getElementById("playersResultCard").style.backgroundColor = "";
        document.getElementById("ComputersResultCard").style.backgroundColor = "";
        document.getElementById("rTitle").style.color = "";
        document.getElementById("rTaunt").style.color = "";
        document.getElementById("ccCard").style = "";
    if (((wins / currentRound) * 100) > 50 && ((wins / currentRound) * 100) < 100) {
        document.getElementById("finalPercent").style.color = "Green";
        document.getElementById("finalTitle").innerHTML = "Great Job! - You Won!";
        document.getElementById("finalTitle").style.color = "DarkGreen";
        } else if (((wins / currentRound) * 100) == 100) {
        document.getElementById("finalPercent").style.color = "Green";
        document.getElementById("finalTitle").innerHTML = "Congratulations: You must be a Qortian!";
        document.getElementById("finalTitle").style.color = "DarkGreen";

    } else if (((wins / currentRound) * 100) == 0) {
        document.getElementById("finalPercent").style.color = "Red";
        document.getElementById("finalTitle").innerHTML = "Are You Working For The FBI?";
        document.getElementById("finalTitle").style.color = "Red"

    } else {
        document.getElementById("finalPercent").style.color = "Red";
        document.getElementById("finalTitle").innerHTML = "Try Again - I'm Sure You'll Win Next Time!";
        document.getElementById("finalTitle").style.color = "Maroon";
    }

}
function restart() {
    document.getElementById("finalResult").className = "hide";
    document.getElementById("inputArea").className = "show";
    document.getElementById("startup").className = "show";
    document.getElementById("displayWins").innerHTML = "Wins: 0";
    document.getElementById("displayLosses").innerHTML = "Losses: 0";
    document.getElementById("displayTies").innerHTML = "Ties: 0";
    document.getElementById("displayPercent").innerHTML = "Win Percentage: 0%";
    wins = 0
    ties = 0
    currentRound = 0
    rounds = 0

}
// playRound()
