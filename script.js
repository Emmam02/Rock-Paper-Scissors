let userSelected = "nothing";
let userScore = 0;
let userScoreText = document.getElementById('userScore');

let comupterSelected = "nothing";
let computerScore = 0;
let computerScoreText = document.getElementById('botScore');

let winnerText = document.getElementById('wonOrLostText');
let winner = "nobody";



function updatView() {
    if (winner != "nobody") {
        winnerText.innerHTML = `
    You chose ${userSelected}, and the Computer 
    chose ${comupterSelected}, so ${winner}!`
    }
};
//Hva brukeren velger
function selectedAlternative(selected) {
    userSelected = selected;
    computerChose();
}

// Datamaskinen sine alternativer og hva han kan velge
function computerChose() {
    let computerChoices = Math.floor(Math.random() * 3) + 1;
    if (computerChoices == 1) comupterSelected = 'rock';
    if (computerChoices == 2) comupterSelected = 'paper';
    if (computerChoices == 3) comupterSelected = 'scissors';
    checkWhoWon();
}

function checkWhoWon() {
    // Spillerens alternative utfall for å vinne.
    if (userSelected == 'rock' && comupterSelected == 'scissors' ||
        userSelected == 'paper' && comupterSelected == 'rock' ||
        userSelected == 'scissors' && comupterSelected == 'paper') {
        winner = 'you won';
        userScore++;
        userScoreText.innerHTML = userScore;
    }
// Dataens alternative utfall for å vinne
    if (comupterSelected == 'rock' && userSelected == 'scissors' ||
        comupterSelected == 'paper' && userSelected == 'rock' ||
        comupterSelected == 'scissors' && userSelected == 'paper') {
            winner= 'the computer won';
            computerScore++;
            computerScoreText.innerHTML = computerScore;
        }
// Utfallf or uavgjort
        if(userSelected != 'nothing' &&  userSelected === comupterSelected){
            winner = 'its a tie'
        }
        updatView();
};








