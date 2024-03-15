
const positions42All = document.querySelectorAll('.pos-42');
const button42 = document.getElementById('showcase-42');
const positions42Div = document.querySelector('.nums-42');
const current42PointsHead = document.querySelector('.current-game-42-header');
const current42PointsDiv = document.querySelector('.current-game-42-points');
const prev42PointsDiv = document.querySelector('.prev-game-42-points');
const best42PointsDiv = document.querySelector('.best-game-42-points');

let nums42Round = [];
let nums42ToCheck = [];
let game42Start = false;
let game42Over = false;
let nums42Ascen = true;
let nums42Descen = true;
let tempNum;
let clickEnabled = false;
let game42RoundPoints = 0;
let game42RoundScores = [];

function generate42GameNum(nums42Round) {

  let numGenerated = Math.floor(Math.random() * 43);

  if (nums42Round.includes(numGenerated)) {

    return generate42GameNum(nums42Round);
  } else {
    
    return numGenerated;
  }
};

function checkAscen(nums42ToCheck) {

  let i = 0;
  while (i < nums42ToCheck.length - 1) {

    console.log("Checking Ascen " + nums42ToCheck[i] + " and " + nums42ToCheck[(i + 1)] );
    if (nums42ToCheck[i] > nums42ToCheck[(i + 1)]) {

      console.log("Ascen returns false");
      return false;
    }
    i++;
  }

  return true;
}

function checkDescen(nums42ToCheck) {

  let i = nums42ToCheck.length - 1;
  while (i > 0) {

    console.log("Checking Descen " + nums42ToCheck[i] + " and " + nums42ToCheck[(i - 1)] );
    if (nums42ToCheck[(i - 1)] > nums42ToCheck[i]) {

      console.log("Descen returns false");
      return false;
    }
    i--;
  }

  return true;
}

function check42Board(nums42ToCheck) {

  console.log(nums42ToCheck);
  nums42Ascen = checkAscen(nums42ToCheck);
  nums42Descen = checkDescen(nums42ToCheck);

  console.log(nums42Ascen);
  console.log(nums42Descen);

  if (!nums42Ascen || !nums42Descen) {

    return true;
  } else {

    return false;
  }
}

button42.addEventListener('click', () => {

  if (!game42Start) {

    if (game42Over) {

      current42PointsHead.innerText = "Points";
      current42PointsDiv.innerText = '';
      button42.classList.remove('game-over');
      game42RoundPoints = 0;
      let i = 1;
      positions42All.forEach(position => {

        if (position.classList.contains('game-over')) {

          position.classList.remove('game-over');
        }
        position.innerText = i + "."
        position.classList.remove('filled');
        position.classList.add('open');

        i++;
      });

      nums42ToCheck.length = 0;

      game42Over = false;
    }

    nums42Round = ['', '' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,''];
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

    e.target.classList.remove('open');
    e.target.classList.add('filled');
    e.target.innerText = tempNum;
    button42.innerText = "Next Number";
    button42.disabled = false;
    clickEnabled = false;
    nums42Round[e.target.id - 1] = tempNum;

    nums42ToCheck = nums42Round.filter(numCheck => numCheck !== '');

    console.log(nums42ToCheck);

    if (nums42ToCheck.length > 1) {

      game42Over = check42Board(nums42ToCheck);
    }
    
    if (game42Over) {

      e.target.classList.add('game-over');
      button42.innerText = "Start New Game";
      button42.classList.add('game-over');
      game42Start = false;
      gameOver42(game42RoundScores, game42RoundPoints);
      nums42ToCheck.length = 0;
    } else {

      game42RoundPoints += 3;
      current42PointsDiv.innerText = game42RoundPoints;
    }
  }
});

function gameOver42(game42RoundScores, game42RoundPoints) {

  current42PointsHead.innerText = "Game";
  current42PointsDiv.innerText = "Over";

  prev42PointsDiv.innerText = game42RoundPoints;
  game42RoundScores.push(game42RoundPoints);

  best42PointsDiv.innerText = Math.max(...game42RoundScores);
  return game42Over = true;

}