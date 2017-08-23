//scripts.js
$(function(){
	console.log('DOM loaded - you can have fun');
});

var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('ROCK') });
pickPaper.addEventListener('click', function() { playerPick('PAPER') });
pickScissors.addEventListener('click', function() { playerPick('SCISSORS') });

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
  }
}

function playerPick(playerPick) {
    console.log(playerPick);
}

function getComputerPick() {
    var possiblePicks = ['ROCK', 'PAPER', 'SCISSORS'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';
}

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'none'; 
    } else if (
        (computerPick == 'ROCK' &&  playerPick == 'SCISSORS') ||
        (computerPick == 'SCISSORS' &&  playerPick == 'PAPER') ||
        (computerPick == 'PAPER' &&  playerPick == 'ROCK')) {
        winnerIs = 'computer';
    }
    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    } else if (winnerIs == 'none') {
        computerResultElem.innerHTML = "Dead-heat";
        playerResultElem.innerHTML = "Dead-heat"
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
  setGamePoints();
  endGame(player, computer);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

  function endGame(player, computer) {
  if(player.score == 10) {
    alert("You're a winner!");
    gameState = "ended";
    setGameElements();
 
  } else if (computer.score == 10) {
    alert("Alas,your loss.Try again");
    gameState = "ended";
    setGameElements();   
  }
}