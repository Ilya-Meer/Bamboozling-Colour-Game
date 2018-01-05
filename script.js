// const rand = Math.floor(Math.random() * (255));

// const colour = `rgb(${rand}, ${rand}, ${rand})`;

const colours = [
  'rgb(100, 200, 32)',
  'rgb(29, 29, 29)',
  'rgb(255, 255, 0)',
  'rgb(234, 79, 28)',
  'rgb(71, 23, 56)',
  'rgb(194, 56, 91)'
];

// const pickedColour = colour;
const pickedColour = colours[3];

// gives h1 span the value of the picked colour
document.querySelector('#val').innerHTML = pickedColour;

const squares = document.querySelectorAll('.square');

for (let i = 0; i < squares.length; i++) {
  // add initial colours
  squares[i].style.backgroundColor = colours[i];

  // add event listeners
  squares[i].addEventListener('click', function(){
    let clickedColour = this.style.backgroundColor;
    if(clickedColour === pickedColour) {
      console.log('You Messed Up!');
    } else {
      this.style.backgroundColor = '#232323';
    }
  });
}