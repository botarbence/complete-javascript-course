let score,
  roundScore,
  activePlayer,
  gameOn,
  currentDiceOne,
  currentDiceTwo,
  previousSix,
  diceoneDOM,
  dicetwoDOM
  maxScore;

diceoneDOM = document.getElementById("one");
dicetwoDOM = document.getElementById("two");

function playerDOM(num) {
  return document.querySelector(".player-" + num + "-panel");
}
function selectDOM(select, num) {
  return document.getElementById(select + "-" + num);
}

function nextPlayer() {
  roundScore = 0;
  playerDOM(0).classList.toggle("active");
  playerDOM(1).classList.toggle("active");
  selectDOM("current", activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  diceoneDOM.style.display = "none";
  dicetwoDOM.style.display = "none";
  previousSix = false;
}

function gameStart() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gameOn = true;
  maxScore = 50;
  previousSix = false;
  diceoneDOM.style.display = "none";
  dicetwoDOM.style.display = "none";
  playerDOM(0).classList.remove("active");
  playerDOM(1).classList.remove("active");
  playerDOM(0).classList.add("active");
  playerDOM(0).classList.remove("winner");
  playerDOM(1).classList.remove("winner");
  selectDOM("name", 0).textContent = "Player 1";
  selectDOM("name", 1).textContent = "Player 2";
  selectDOM("current", 0).textContent = 0;
  selectDOM("current", 1).textContent = 0;
  selectDOM("score", 0).textContent = 0;
  selectDOM("score", 1).textContent = 0;
}

gameStart();

document.querySelector(".btn-roll").addEventListener("click", () => {
  maxScore =document.querySelector("input").value;
  if (gameOn) {
    currentDiceOne = Math.floor(Math.random() * 6) + 1;
    currentDiceTwo = Math.floor(Math.random() * 6) + 1;
    diceoneDOM.style.display = "block";
    dicetwoDOM.style.display = "block";
    diceoneDOM.src = "dice-" + currentDiceOne + ".png";
    dicetwoDOM.src = "dice-" + currentDiceTwo + ".png";
    if ((currentDiceOne === 6 || currentDiceTwo === 6) && previousSix === true) {
      scores[activePlayer] = 0;
      nextPlayer();
    } else if (currentDiceOne === 1 || currentDiceTwo === 1) {
      nextPlayer();
    } else {
      if (scores[activePlayer] + roundScore + currentDiceOne + currentDiceTwo >= maxScore) {
        selectDOM("name", activePlayer).textContent = "Winner!";
        selectDOM("score", activePlayer).textContent =
        scores[activePlayer] + roundScore + currentDiceOne + currentDiceTwo;
        playerDOM(activePlayer).classList.add("winner");
        playerDOM(activePlayer).classList.remove("active");
        gameOn = false;
      } else {
        roundScore += currentDiceOne + currentDiceTwo;
        (currentDiceOne === 6 || currentDiceTwo === 6) ? previousSix = true : previousSix = false;
        selectDOM("current", activePlayer).textContent = roundScore;
      }
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  if (gameOn) {
    scores[activePlayer] += roundScore;
    selectDOM("score", activePlayer).textContent = scores[activePlayer];
    nextPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", gameStart);
