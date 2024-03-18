// Fizz Buzz
const fizzBuzzForm = document.getElementById('fizz-buzz-form');
const fizzBuzzInput = document.getElementById('fizz-buzz-input');
const fizzBuzzOutput = document.querySelector('.fizz-buzz-output');

fizzBuzzForm.addEventListener('submit', (e) => {

  e.preventDefault();
  fizzBuzz(parseInt(fizzBuzzInput.value));
})

function fizzBuzz(input) {

  //let fizzBuzzText = ``;
  let fizzBuzzArray = [];
  fizzBuzzOutput.innerHTML = ``;

  for (var i = 1; i <= input; i++) {

    if (i == 0) {
      //fizzBuzzText = `1 `;
      fizzBuzzArray.push(`1, `);
    }
    if (i % 3 == 0 && i % 5 == 0) {

      //fizzBuzzText += ` <span class="inline-teal">fizzBuzz</span>`;
      fizzBuzzArray.push(` <span class="inline-teal inline-bold">fizzBuzz</span>, `);
    } else if (i % 3 == 0) {

      //fizzBuzzText += ` <span class="inline-yellow">fizz</span> `;
      fizzBuzzArray.push(` <span class="inline-yellow">fizz</span>, `);
    } else if (i % 5 == 0) {

      //fizzBuzzText += ` <span class="inline-coral">buzz</span> `;
      fizzBuzzArray.push(` <span class="inline-coral">buzz</span>, `);
    } else {
      //fizzBuzzText += ` ${i} `;
      fizzBuzzArray.push(` ${i}, `);
    }
  }

  fizzBuzzArray.forEach((val, index) => {

    setTimeout(() => {

      fizzBuzzOutput.innerHTML += val;
    }, (index * 1000) / fizzBuzzArray.length);
  });
}

// Fibonachi
const fibonachiForm = document.getElementById('fibonachi-form');
const fibonachiInput = document.getElementById('fibonachi-input');
const fibonachiOutput = document.querySelector('.fibonachi-sequence-output');

fibonachiForm.addEventListener('submit', (e) => {

  e.preventDefault()
  fibonachiGenerator(parseInt(fibonachiInput.value));
})

function fibonachiGenerator(input) {

  let fiboSeq = [];
  fibonachiOutput.innerHTML = ``;
  
  console.log("input is " + input + " and is type " + typeof input);
  if (input <= 1) {
      
    fiboSeq.push(` 1, `);
  } else if (input == 2) {
      
    fiboSeq = [` 1, `, ` 1, `]   
  } else if (input >= 3) {
      
    fiboSeq = [` 1, `, ` 1, `, ` 2, `];
    for (var i = 3; i < input; i++) {
      
      console.log("i is " + i);
      console.log(fiboSeq);
      let nextNum = parseInt(fiboSeq[i - 2]) + parseInt(fiboSeq[i - 1]);
      console.log(nextNum);
      if (i == input - 1) {

        fiboSeq.push(` <span class="inline-coral inline-bold">${nextNum}</span>, `);
      } else {

        fiboSeq.push(` ${nextNum}, `);
      }
    }
  }

  fiboSeq.forEach((num, index) => {

    setTimeout(() => {

      fibonachiOutput.innerHTML += num;
    }, (index * 1000) / fiboSeq.length)
  })
}

const jsPortfolioButton = document.getElementById('tm-javascript-portfolio-specs-button');
const homeSpecs = document.getElementById('tm-home-specs');
const homeSpecsDivs = document.querySelectorAll('#tm-home-specs div');

jsPortfolioButton.addEventListener('click', () => {


});