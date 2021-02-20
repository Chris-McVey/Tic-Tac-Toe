let addX = (event) => {
  event.target.innerHTML = 'X';
}





//event listener for each square
//loop through them?
for (let i = 0; i < document.getElementsByClassName('square').length; i++ ) {
  document.getElementsByClassName('square')[i].addEventListener('click', addX);
}