function cardAlt(e) {
    document.getElementById(e).style.backgroundColor = "LightGreen";
    document.getElementById(e).style.border = "3px solid LightGreen";
}
function cardReg(e) {
    document.getElementById(e).style.backgroundColor = "LightBlue";
    document.getElementById(e).style.border = "3px solid MidnightBlue";
}
function cardClick(e) {
    
}
function showOtherGames() {
    document.getElementById('gamesGrid1').style.display = 'none';
    document.getElementById('otherGames').style.display = 'flex';
}
function showGames() {
    document.getElementById('otherGames').style.display = 'none';
    document.getElementById('gamesGrid1').style.display = 'flex';
}
function otgTest() {
    window.location="qortal://WEBSITE/Pigpig105/qbert.html"
}