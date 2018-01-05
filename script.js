
const colours = generateColours(6);

// const pickedColour = colour;
const pickedColour = pickColour();

// gives h1 span the value of the picked colour
document.querySelector('#val').innerHTML = pickedColour;

const squares = document.querySelectorAll('.square');

const message = document.querySelector('#message');


for (let i = 0; i < squares.length; i++) {
  // add initial colours
  squares[i].style.backgroundColor = colours[i];

  // add event listeners
  squares[i].addEventListener('click', function(){
    let clickedColour = this.style.backgroundColor;
    if(clickedColour === pickedColour) {
      colourChange(clickedColour);
      message.textContent = "Correct!"
    } else {
      this.style.backgroundColor = '#232323';
      message.textContent = "Try Again!";
    }
  });
}

function colourChange(colour) {
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
  return Math.floor(Math.random() * (255) + 1);
}