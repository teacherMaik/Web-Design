

const typeWriterWords = ["JAVASCRIPT", "JQUERY", "SASS•CSS", "BOOTSTRAP", "TAILWIND", "INKSCAPE"];
const typeWriterEl = document.getElementById('tm-type-writer');

let typing = true;
let word = 0;
const sleepTime = 100;

const navBar = document.getElementById('tm-navbar');
let scrolled = false;


// Navbar Animation and Transition on window scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {

    navBar.classList.remove('top');
    navBar.classList.add('scrolled');
  }
});


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

      typeWriterEl.innerText = currentWord.substring(0, letter + 1);
      await sleep(sleepTime);
      letter++;
    }

    await sleep(420);

    while (letter > 0) {
      typeWriterEl.innerText = currentWord.substring(0, letter - 1);
      await sleep(42)
      letter--;
    }
    console.log("waited");
    
    if (word == typeWriterWords.length - 1) {
      console.log("resetting word value");
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
if (isInViewport(typeWriterEl)) {
  writeLoop();
}

/* Type writer effect
if (window.location.pathname == "/dist/" && isInViewport(typeWriterEl) == true && word < typeWriterWords.length) {

};

function typeEffect() {

  while (word < typeWriterWords.length) {

    let txt = typeWriterWords[word];
    console.log("reading " + txt);
    console.log("length is " + txt.length);

    typeLetters(typeWriterEl, txt);

    word++
  }
}


function typeLetters(el, text, i = 0) {

  console.log("reading text ->" + text);
  if (i == text.length) {
    setTimeout(840);

    deleteLetters(el, text, i = text.length);
    return;
  }

  el.textContent += text[i];
  setTimeout(() => typeLetters(el, text, i + 1), 2000);
};

function deleteLetters(el, text, i = text.length - 1) {

  console.log("trying to delete i -> " + 1);
  if (i == 0) {
    setTimeout(840);
    return;
  }

  el.textContent = text.substring(0, i - 1);
  setTimeout(() => deleteLetters(el, text, i - 1), 420);
};*/

/*
function typeWriter() {

  const typeWriterVals = ["JAVASCRIPT", "JQUERY", "CSS", "BOOTSTRAP", "TAILWIND", "INKSCAPE"];
  const typeWriterTxt = document.getElementById('tm-type-writer');
  

  let word = 0;

  console.log(typeWriterVals[2]);
  console.log(typeWriterVals.length);
  console.log(word);

  while (word < typeWriterVals.length) {

    console.log("entering 1st while");
    let i = 0;
    tempWord = typeWriterVals[word];

    console.log(tempWord);
    while (i < tempWord.length ){
      
      setTimeout(function () {
        typeWriterTxt.innerText = typeWriterTxt.innerText + tempWord.substring(i, i + 1);
      }, 2000);

      i++;
    }

    word++;
  }

  return;
}*/


