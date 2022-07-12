let homeScoreDisplayID = document.getElementById('home-score-display-id');
let guestScoreDisplayID = document.getElementById('guest-score-display-id');

let gameTimerID = document.getElementById('game-time');

let gameMinID = document.getElementById("gameMinute");
let gameSecID = document.getElementById("gameSecond");

// let newGameBtnID = document.getElementById("new-game-id");
// let startGameBtnID = document.getElementById("start-game-id");

let homeFoulCounterID = document.getElementById('home-foul-id');
let guestFoulCounterID = document.getElementById('guest-foul-id');

let homeLeadingID = document.getElementById('home-leading-team-id');
let guestLeadingID = document.getElementById('guest-leading-team-id');




let currentHomeScore = 0;
let currentGuestScore = 0;

let currentHomeFoul = 0;
let currentGuestFoul = 0;



// TIME ================
// If click the "Start The Game" Button, Start the time
// If click the "New Game" Button, reset the time 00 : 00
let time;
let gameStartMinute = 20;
let gameStartSecond = gameStartMinute * 60;

let min = 00;
let sec = 00;

function gameTime(){
  time = setInterval(runMinAndSec, 1000);

}

function runMinAndSec(){
  min = Math.floor(gameStartSecond / 60);
  sec = gameStartSecond % 60;

  gameMinID.innerText = min;
  gameSecID.innerText = sec;

  gameStartSecond--;
  

}

function stopGameTime(){
  clearInterval(time);
  time = stopMinAndSec();

}

function stopMinAndSec(){
  gameStartMinute = 00;
  gameStartSecond = 00;

  gameMinID.innerText = gameStartMinute;
  gameSecID.innerText = gameStartSecond;

  gameStartMinute = 20;
  gameStartSecond = gameStartMinute * 60;

}



// ======================================




// Home     Score
function addOneHome() {
  currentHomeScore += 1;
  homeScoreDisplayID.textContent = currentHomeScore;
}
function addTwoHome() {
  currentHomeScore += 2;
  homeScoreDisplayID.textContent = currentHomeScore;
}
function addThreeHome() {
  currentHomeScore += 3;
  homeScoreDisplayID.textContent = currentHomeScore;
}
// Home Score Clear
function clearHome() {
  currentHomeScore = 0;
  homeScoreDisplayID.textContent = currentHomeScore;

  currentHomeFoul = 0;
  homeFoulCounterID.textContent = 'Foul : ' + currentHomeFoul;
}
// Home Foul Counter
function homeFoulCounter() {
  currentHomeFoul += 1;
  homeFoulCounterID.textContent = 'Foul : ' + currentHomeFoul;
}

// Home Score -1
function homeScoreMinusOne() {
  currentHomeScore -= 1;
  homeScoreDisplayID.textContent = currentHomeScore;
}

// Guest    Score
function addOneGuest() {
  currentGuestScore += 1;
  guestScoreDisplayID.textContent = currentGuestScore;
}
function addTwoGuest() {
  currentGuestScore += 2;
  guestScoreDisplayID.textContent = currentGuestScore;
}
function addThreeGuest() {
  currentGuestScore += 3;
  guestScoreDisplayID.textContent = currentGuestScore;
}
// Guest Score Clear
function clearGuest() {
  currentGuestScore = 0;
  guestScoreDisplayID.textContent = currentGuestScore;

  currentGuestFoul = 0;
  guestFoulCounterID.textContent = 'Foul : ' + currentGuestFoul;
}
// Guest Foul Counter
function guestFoulCounter() {
  currentGuestFoul += 1;
  guestFoulCounterID.textContent = 'Foul : ' + currentGuestFoul;
}
// Guest Score -1
function guestScoreMinusOne() {
  currentGuestScore -= 1;
  guestScoreDisplayID.textContent = currentGuestScore;
}




// NEW the GAME



function newGame(){
    currentHomeScore = 0;
    homeScoreDisplayID.textContent = 0;
    currentGuestScore = 0;
    guestScoreDisplayID.textContent = 0;

    currentGuestFoul = 0;
    guestFoulCounterID.textContent = 'Foul : ' + 0;
    currentHomeFoul = 0;
    homeFoulCounterID.textContent = 'Foul : ' + 0;

    homeLeadingID.innerText = "XXXXX";
    guestLeadingID.innerText = "XXXXX";


}




// LEADING the GAME
function leadingGame(){
    if(currentHomeScore > currentGuestScore){
        guestLeadingID.innerText = "";
        homeLeadingID.innerText = "LEADING THE GAME";

    }else if(currentGuestScore  > currentHomeScore){
        homeLeadingID.innerText = "";
        guestLeadingID.innerText = "LEADING THE GAME";

    }else if(currentGuestScore  == currentHomeScore){
        homeLeadingID.innerText = "XXXXX";
        guestLeadingID.innerText = "XXXXX";
    }
}
