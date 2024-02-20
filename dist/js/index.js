
const typeWriterVals = ["JAVASCRIPT", "JQUERY", "CSS", "BOOTSTRAP", "TAILWIND", "INKSCAPE"];
const typeWriterTxt = document.getElementById('tm-type-writer');



const navBar = document.getElementById('tm-navbar');
let scrolled = false;

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {

    navBar.classList.remove('top');
    navBar.classList.add('scrolled');
  }
})

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

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
        typeWriterTxt.innerText = typeWriterTxt.innerText + tempWord[i];
      }, 2000);

      i++;
    }

    word++;
  }

  return;
}

