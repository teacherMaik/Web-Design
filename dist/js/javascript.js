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

    console.log("i is " + i);
    if (i == 0) {
      
      fizzBuzzArray.push(`1, `);
    }
    if (i % 3 == 0 && i % 5 == 0) {

      if (i == input) {

        fizzBuzzArray.push(` <span class="inline-teal inline-bold">fizzBuzz</span>`);
      } else {

        fizzBuzzArray.push(` <span class="inline-teal inline-bold">fizzBuzz</span>, `);
      }
    } else if (i % 3 == 0) {

      if (i == input) {
        fizzBuzzArray.push(` <span class="inline-yellow">fizz</span>`);
      } else {
        fizzBuzzArray.push(` <span class="inline-yellow">fizz</span>, `);
      }
      
    } else if (i % 5 == 0) {

      if (i == input) {

        fizzBuzzArray.push(` <span class="inline-coral">buzz</span>`);  
      } else {

        fizzBuzzArray.push(` <span class="inline-coral">buzz</span>, `);
      }
    } else {

      if (i == input) {

        console.log("i - 1");
        fizzBuzzArray.push(` ${i}`);
      } else {

        fizzBuzzArray.push(` ${i}, `);
      }
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

        fiboSeq.push(` <span class="inline-coral inline-bold">${nextNum}</span> `);
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

// Footer Page Specs
const jsPortfolioButton = document.getElementById('tm-javascript-portfolio-specs-button');
const jsPortfolioSpecs = document.getElementById('tm-javascript-portfolio-specs');
const jsPortfolioSpecsDivs = document.querySelectorAll('#tm-javascript-portfolio-specs div');

jsPortfolioButton.addEventListener('click', () => {

  if (!jsPortfolioButton.classList.contains('active')) {
    jsPortfolioButton.classList.add('active');
    jsPortfolioButton.innerHTML = "Remove Page Specs";
    jsPortfolioSpecs.classList.add('active');
    
    jsPortfolioSpecsDivs.forEach((div, index) => {

      setTimeout(() => {

        div.classList.add('active');
      }, index * 420);
    });
  } else {
    jsPortfolioSpecsDivs.forEach((div, index) => {

      setTimeout(() => {

        div.classList.remove('active');
      }, index * 210);
    })

    setTimeout(() => {

      jsPortfolioButton.innerHTML = "Show Page Specs";
      jsPortfolioSpecs.classList.remove('active');
      setTimeout(() => {

        jsPortfolioButton.classList.remove('active');
      }, 200);
    }, 800);
  }
});


// Smooth Scrolling with Jquery
$('.btn-scroll-down').on('click', function(e){

  if (this.hash !== '') {

    // Prevents default behaviour of click event, which would jump user to hash reference
    e.preventDefault();

    $('html, body').animate({

      // Uses this from click event to reference hash from clicked button with btn-scroll-down class
      scrollTop: $(this.hash).offset().top - 42
    }, 800);
  }
});