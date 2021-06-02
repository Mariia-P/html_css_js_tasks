/* START TASK 1: Your code goes here */
const table = document.querySelector('.table-wrapper');
const firstColumn = [...document.querySelectorAll('td[data-cell="first-col"]')];
const specialEl = document.querySelector('td[data-cell="special"]');
const ordinaryCells = [
  ...document.querySelectorAll('td[data-cell="ordinary"]')
];
const allTds = document.querySelectorAll('td');

const listener = function (event) {
  if (event.target.getAttribute('data-cell') === 'first-col') {
    const rowBlue = [...event.target.parentElement.children];
    addColorAfterPushFirstColumn(rowBlue);
  }
  if (event.target.getAttribute('data-cell') === 'special') {
    addColorAfterPushSpecial(allTds);
  }
  if (event.target.getAttribute('data-cell') === 'ordinary') {
    const cell = event.target;

    addColorAfterPushOrdinary(cell);
  }
};

table.addEventListener('click', listener);

function addColorAfterPushFirstColumn(nodes) {
  nodes.forEach((node) => {
    if (node.classList.contains('yellow')) {
      return;
    } else {
      toggleColor(node, 'blue');
    }
  });
}

function addColorAfterPushSpecial(nodes) {
  nodes.forEach((node) => {
    if (node.classList.contains('yellow') || node.classList.contains('blue')) {
      return;
    } else {
      toggleColor(node, 'green');
    }
  });
}

function addColorAfterPushOrdinary(node) {
  toggleColor(node, 'yellow');
}

function toggleColor(node, color) {
  if (Array.isArray(node)) {
    node.forEach((element) => {
      if (element.classList.length > 0) {
        let clasL = [...element.classList];

        element.classList.remove(clasL);
      }

      element.classList.add(color);
    });
  } else {
    if (node.classList.length > 0) {
      let clasL = [...node.classList];
      node.classList.remove(clasL);
    }
    node.classList.add(color);
  }
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */
// const inputForm = document.forms['calculator'];
const inputForm = document.querySelector('.form-input');
const messageDiv = document.querySelector('.massege-wrapper');
const button = document.querySelector('.disabled-but');
const startNovalidateNumber = 4;
inputForm.oninput = function () {
  if (inputForm.value.length > startNovalidateNumber) {
    if (isValid(inputForm.value)) {
      showNoMassage();
    } else {
      showRedMassage();
    }
  }
};

button.onclick = function (evt) {
  evt.preventDefault();
  if (isValidNamber(inputForm.value)) {
    showGreenMassage();
  } else {
    showRedMassage();
  }
};

function showRedMassage() {
  if (messageDiv.classList.contains('green')) {
    messageDiv.classList.remove('green');
    messageDiv.textContent = '';
  }
  //   debugger;
  if (button.getAttribute('disabled') !== 'disabled') {
    button.setAttribute('disabled', 'disabled');
  }
  messageDiv.classList.add('red');
  messageDiv.textContent = 'Type number does not follow format +380*****';
  inputForm.classList.add('red-border');
}
function showNoMassage() {
  if (messageDiv.classList.contains('red')) {
    messageDiv.classList.remove('red');
    messageDiv.textContent = '';
  }
  if (button.getAttribute('disabled') === 'disabled') {
    button.removeAttribute('disabled');
  }
  if (inputForm.classList.contains('red-border')) {
    inputForm.classList.remove('red-border');
  }
}

function showGreenMassage() {
  showNoMassage();
  messageDiv.classList.add('green');
  messageDiv.textContent = 'Data was sucsessfully send';
}

function isValid(text) {
  return /^\+?3?8?(0\d{1,9})$/.test(text);
}

function isValidNamber(text) {
  return /^\+?3?8?(0\d{9})$/.test(text);
}

/* END TASK 2 */

/* START TASK 3: Your code goes here */

const ball = document.getElementById('ball');
const field = document.querySelector('.coutr-wrapper');
const score = document.querySelector('.score');

let counterA = 0;
let counterB = 0;
const scoreA = document.querySelector('.message-A');
const scoreB = document.querySelector('.message-B');

scoreA.textContent = 'Team A:' + counterA;
scoreB.textContent = 'Team B:' + counterB;

const ballListener = function (event) {
  let fieldCoords = this.getBoundingClientRect();
  let halfBallSize = 2;

  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / halfBallSize,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / halfBallSize
  };

  if (ballCoords.top < 0) {
 ballCoords.top = 0; 
}

  if (ballCoords.left < 0) {
 ballCoords.left = 0; 
}

  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';

  if (event.target.classList.contains('hoop-A')) {
    counterB++;

    scoreB.textContent = 'Team B:' + counterB;

    changeScore('A', 'blue');
  }
  if (event.target.classList.contains('hoop-B')) {
    counterA++;
    scoreA.textContent = 'Team A:' + counterA;
    changeScore('B', 'red');
  }
};

field.addEventListener('click', ballListener);

function changeScore(winner, color) {
  const myEvent = new CustomEvent('scoreMassage', {
    detail: {
      winnerNew: winner,
      colorNew: color
    }
  });

  score.dispatchEvent(myEvent);
}

score.addEventListener('scoreMassage', function (e) {
  let timeStop = 3000;
  field.removeEventListener('click', ballListener);
  score.style.color = e.detail.colorNew;
  score.textContent = 'Team ' + e.detail.winnerNew + ' scored';
  setTimeout(() => {
    score.textContent = '';
    field.addEventListener('click', ballListener);
  }, timeStop);
});

/* END TASK 3 */
