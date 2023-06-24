
// let computerChoice = "?"
let computerSelection; //for output of getcomputerchoice() function
let playerSelection = "" ; //for output of getPlayerChoice() function
let currentround; // counter for current round in playRound() function
let rounds; // total number of rounds to be played - obtained from user input
let result; // stores the results string after both selections have been compared
let wins = 0; //stores number of wins per game used to calculate win/loss percentage
let ties = 0; //stores number of tie rounds, used to calculate win/loss percentage



function getcomputerchoice() {
    let choice = Math.floor(Math.random() *3) +1;
    if (choice === 1){
        return "Rock";
        
    } else if (choice === 2){
        return "Paper";
        
    } else {
        return "Scissors";
        
    }
}

function getPlayerChoice() {
    Pchoice = prompt("Round " + currentround + " / " + rounds + "\n" + "Your move (Rock, Paper, Scissors)");
    Pchoice = Pchoice.toLowerCase();
    Tchoice = Pchoice.substr(0,1);
    Tchoice = Tchoice.toUpperCase();
    Pchoice = Tchoice + Pchoice.substr(1);
    
    if (Pchoice === "Rock" || Pchoice === "Paper" || Pchoice === "Scissors") {
        return Pchoice;
    }else {
        getPlayerChoice()
    }       
    
}

function playRound() {
    rounds = parseInt(prompt("Number of rounds to play?"));
    currentround = 1;
    while (currentround <= rounds) {
        computerSelection = getcomputerchoice();
        playerSelection = getPlayerChoice();
        result = getResult(computerSelection, playerSelection, wins, ties);
        console.log ("Computer's play: " + computerSelection);
        console.log ("Your play: " + playerSelection);
        console.log ("Result: " + result);
        console.log ("Wins: " + wins + " / Losses: " + ((currentround - ties) - wins + " ties: " + ties));
        console.log ("Win percentage: " + ((wins / currentround) * 100) + "%");


        currentround++;
    }
}

function getResult() {
    
    if (computerSelection === "Rock") {
        switch(playerSelection) {
            
            case "Rock":
            ++ties
            return "You blockhead, that's a tie!";
                        
            case"Paper":
            ++wins
            return "You've got this covered, that's a win!";
            
            case "Scissors":
            return "We're having a smashing good time, you lost.";
            
        }
    }else if (computerSelection === "Paper"){
        switch(playerSelection) {
            
            case "Rock":
            return "Are you cozy under there, Loser!";
                        
            case "Paper":
            ++ties
            return "What a pair of limp sheets you are, that's a tie";
            
            case "Scissors":
            ++wins
            return "Snipping your competition to shreds, Winner!";
            
        }
    }else if(computerSelection === "Scissors") {
        switch(playerSelection) {
            
            case "Rock":
            ++wins
            return "What a smashing win!";
            
            case "Paper":
            return "You've been snipped in but, you lose!"
            
            case "Scissors":
            ++ties
            return "Sharp wits think alike, how about a tie breaker?";
            
        }
    } else {
            wins = 0
            ties = 0
            return "Something went horribly wrong - all progress has been reset"
            

    }
}

playRound()
