let isXTurn = true;

let boardState = {
  '1': null,
  '2': null,
  '3': null,
  '4': null,
  '5': null,
  '6': null,
  '7': null,
  '8': null,
  '9': null,
}

let addX = (event) => {
  event.target.innerHTML = 'X';
  boardState[String(event.target.id)] = 'X';
}

let addO = (event) => {
  event.target.innerHTML = 'O';
  boardState[String(event.target.id)] = 'O';
}

let isWinner = () => {
  //make a check for win function
  let checkLine = (a, b, c) => {
    let line = boardState[a] + boardState[b] + boardState[c];
    if (line === 'XXX' || line === 'OOO') {
      return true;
    } else {
      return false;
    }
  }
  if (checkLine(1, 2, 3) || checkLine(4, 5, 6) || checkLine(7, 8, 9) || checkLine(1, 4, 7) || checkLine(2, 5, 8) || checkLine(3, 6, 9) || checkLine(1, 5, 9) || checkLine(3, 5, 7)) {
    return true;
  } else {
    return false;
  }
}

let isTie = () => {
  let moveCount = 0;
  for (let key in boardState) {
    if (boardState[key] !== null) {
      moveCount++
    }
  }
  if (moveCount === 9 && !isWinner()) {
    return true;
  } else {
    return false;
  }
}

let routing = (event) => {
  if (boardState[String(event.target.id)] !== null) {
    alert('Not a valid move!');
    return;
  }
  if (isXTurn) {
    addX(event);
  } else {
    addO(event);
  }
  isXTurn = !isXTurn;
  if (isWinner()) {
    document.getElementById('win').innerHTML = 'You Win!'
    document.getElementById('again').innerHTML = 'CLICK HERE TO PLAY AGAIN'
  }
  if (isTie()) {
    document.getElementById('win').innerHTML = 'It\'s a Tie!';
    document.getElementById('again').innerHTML = 'CLICK HERE TO PLAY AGAIN'
  }
}

let resetGame = () => {
  for (let i = 0; i < document.getElementsByClassName('square').length; i++ ) {
    document.getElementsByClassName('square')[i].innerHTML = null;
  }
  document.getElementById('again').innerHTML = null;
  document.getElementById('win').innerHTML = null;
  isXTurn = true;
  for (let key in boardState) {
    boardState[key] = null;
  }
}

//event listeners for each square
//loop through them?
for (let i = 0; i < document.getElementsByClassName('square').length; i++ ) {
  document.getElementsByClassName('square')[i].addEventListener('click', routing);
}
document.getElementById('again').addEventListener('click', resetGame);