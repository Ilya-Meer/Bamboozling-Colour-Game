let numSquares = 6;
let colours = generateColours(numSquares);
let pickedColour = pickColour();
const squares = document.querySelectorAll('.square');
const message = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.getElementById('reset');
const easy = document.querySelector('.easy');
const hard = document.querySelector('.hard');


span();


resetButton.addEventListener('click', function() {
  colours = generateColours(numSquares);
  pickedColour = pickColour();
  span();
  for (let i = 0; i < squares.length; i++) {
    // add initial colours
    squares[i].style.backgroundColor = colours[i];
  }
  h1.style.backgroundColor = 'steelblue';
})


for (let i = 0; i < squares.length; i++) {
  // add initial colours
  squares[i].style.backgroundColor = colours[i];

  // add event listeners
  squares[i].addEventListener('click', function(){
    let clickedColour = this.style.backgroundColor;
    if(clickedColour === pickedColour) {
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


easy.addEventListener('click', function(){
  this.classList.add('selected');
  hard.classList.remove('selected');
  numSquares = 3;
  colours = generateColours(3);
  pickedColour = pickColour();
  span();
  for (let i = 0; i < squares.length; i++) {
    if (colours[i]) {
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = 'none';
    }
    
  }
})

hard.addEventListener('click', function(){
  this.classList.add('selected');
  easy.classList.remove('selected');
  numSquares = 6;
  colours = generateColours(6);
  pickedColour = pickColour();
  span();
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i];
    squares[i].style.display = 'block';
  }
})


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
  return arr
}

function rand() {
  return Math.floor(Math.random() * 256);
}

function span() {
  // gives h1 span the value of the picked colour
  document.querySelector('#val').innerHTML = pickedColour;
};
