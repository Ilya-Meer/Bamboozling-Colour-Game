let numSquares = 6;
let colours = [];
let pickedColour;
const squares = document.querySelectorAll('.square');
const message = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.getElementById('reset');
const modeButtons = document.querySelectorAll('.mode');
init();


resetButton.addEventListener('click', function () {
  reset();
})


function init() {
  modeButtonListeners();
  squareListeners();
  reset();
}

function reset() {
  colours = generateColours(numSquares);
  pickedColour = pickColour();
  span();
  h1.style.backgroundColor = 'steelblue';
  message.textContent = '';
  resetButton.textContent = 'New Colours';
  for (let i = 0; i < squares.length; i++) {
    if (colours[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
}

function modeButtonListeners() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      modeButtons[2].classList.remove('selected');
      this.classList.add('selected');
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else if (this.textContent === "Hard") {
        numSquares = 6;
      } else {
        numSquares = 12;
      }
      reset();
    })
  }
}

function squareListeners() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
      let clickedColour = this.style.backgroundColor;
      if (clickedColour === pickedColour) {
        colourChange(clickedColour);
        message.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
      }
      else {
        this.style.backgroundColor = '#232323';
        message.textContent = "Try Again!";
      }
    });
  }
}

function colourChange(colour) {
  h1.style.backgroundColor = colour;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colour;
  }
}

function pickColour() {
  let random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateColours(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(`rgb(${rand()}, ${rand()}, ${rand()})`);
  }
  return arr;
}

function rand() {
  return Math.floor(Math.random() * 256);
}

function span() {
  // gives h1 span the value of the picked colour
  document.querySelector('#val').innerHTML = pickedColour;
};
