// typewrite script for front page
const typeWriterWords = ["JAVASCRIPT", "JQUERY", "SASS•CSS", "BOOTSTRAP", "TAILWIND", "INKSCAPE"];
const typeWriterEl = document.getElementById('tm-type-writer');

let typing = true;
let word = 0;
const sleepTime = 100;

// sleep Function for pause. Can be used for different times by modifying the time input
function sleep(ms) {
  return new Promise ((resolve) => setTimeout(resolve, ms));
};

// Async Function
const writeLoop = async () => {

  while (true) {
    let currentWord = typeWriterWords[word];
    let letter = 0;

    while (letter < currentWord.length) {

      typeWriterEl.innerHTML = currentWord.substring(0, letter + 1);
      await sleep(sleepTime);
      letter++;
    }

    await sleep(420);

    while (letter > 0) {
      typeWriterEl.innerHTML = currentWord.substring(0, letter - 1);
      await sleep(42)
      letter--;
    }
    
    if (word == typeWriterWords.length - 1) {
      word = 0;
    } else {
      word++;
    }
  }
};

// Checks to see if typewriter div is in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Conditional to call write async function when typewriter div is in viewport
if (window.location.pathname == "/" && isInViewport(typeWriterEl)) {
  writeLoop();
}


// Smoothscroll with jQuery
// Conditional to check if navigating my-webs page
if (window.location.pathname == "/my-webs" || window.location.pathname == "/my-webs.html") {

  // Gets all outer dots by scroll-top class and adds click function
  $('.btn-scroll-top').on('click', function(e) {

    // Animates body at 840miliseconds and scrolls to top of document (0px)
    $('html, body').animate({
      
      scrollTop: '0px'
    }, 840, 'linear')
  })

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
}

// Footer specs Elements
const specsBtns = document.querySelectorAll('.specs-btn');

specsBtns.forEach(specsBtn => {

  specsBtn.addEventListener('click', (e) => {

    console.log(e.target.id);

    switch (e.target.id) {

      case 'tm-home-specs-button':
        const homeSpecsBtn = document.getElementById('tm-home-specs-button');
        const homeSpecs = document.getElementById('tm-home-specs');
        const homeSpecsDivs = document.querySelectorAll('#tm-home-specs div');

        if (!homeSpecsBtn.classList.contains('active')) {
          homeSpecsBtn.classList.add('active');
          homeSpecsBtn.innerHTML = "Remove Page Specs";
          homeSpecs.classList.add('active');
          
          homeSpecsDivs.forEach((div, index) => {
      
            setTimeout(() => {
      
              div.classList.add('active');
            }, index * 420);
          });
        } else {
          homeSpecsDivs.forEach((div, index) => {
  
            setTimeout(() => {
      
              div.classList.remove('active');
            }, index * 210);
          })
      
          setTimeout(() => {
      
            homeSpecsBtn.innerHTML = "Show Page Specs";
            homeSpecs.classList.remove('active');
            setTimeout(() => {
      
              homeSpecsBtn.classList.remove('active');
            }, 200);
          }, 800);
        }
        break;
      
      case 'tm-webs-specs-button':
        const websSpecsBtn = document.getElementById('tm-webs-specs-button');
        const websSpecs = document.getElementById('tm-webs-specs');
        const websSpecsDivs = document.querySelectorAll('#tm-webs-specs div');
        
        if (!websSpecsBtn.classList.contains('active')) {
          websSpecsBtn.classList.add('active');
          websSpecsBtn.innerHTML = "Remove Page Specs";
          websSpecs.classList.add('active');
          
          websSpecsDivs.forEach((div, index) => {
      
            setTimeout(() => {
      
              div.classList.add('active');
            }, index * 420);
          });
        } else {
          websSpecsDivs.forEach((div, index) => {
  
            setTimeout(() => {
      
              div.classList.remove('active');
            }, index * 210);
          })
      
          setTimeout(() => {
      
            websSpecsBtn.innerHTML = "Show Page Specs";
            websSpecs.classList.remove('active');
            setTimeout(() => {
      
              websSpecsBtn.classList.remove('active');
            }, 200);
          }, 800);
        }
        break;

      default:
        break;
    };
  });
})



