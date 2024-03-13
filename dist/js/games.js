
const positions42All = document.querySelectorAll('.pos-42');
const button42 = document.getElementById('showcase-42');
const positions42Div = document.querySelector('.nums-42');

let nums42Round = [];
let game42Start = false;
let game42Over = false;
let tempNum;
let clickEnabled = false;

function generate42GameNum(nums42Round) {

  let numGenerated = Math.floor(Math.random() * 43);

  if (nums42Round.includes(numGenerated)) {

    return generate42GameNum(nums42Round);
  } else {
    
    return numGenerated;
  }
};

button42.addEventListener('click', async (e) => {

  if (!game42Start) {

    let nums42Round = ['', '' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,''];
    game42Start = true;

    tempNum = generate42GameNum(nums42Round);
    button42.innerText = tempNum;
    //await set42GameNumber(tempNum, nums42Round);
    button42.disabled = true;
    clickEnabled = true;
  } else {

    tempNum = generate42GameNum(nums42Round);
    button42.innerText = tempNum;
    //await set42GameNumber(tempNum, nums42Round);
    button42.disabled = true;
    clickEnabled = true;
  }
})

positions42Div.addEventListener('click', (e) => {

  if (e.target.classList.contains('open') && clickEnabled) {

    console.log("was open");
    e.target.classList.remove('open');
    e.target.classList.add('filled');
    e.target.innerText = tempNum;
    button42.disabled = false;
    clickEnabled = false;
    nums42Round[e.target.id - 1] = tempNum;
  }

  
})

