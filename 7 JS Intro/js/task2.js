// Your code goes here
let mainMsg = confirm('Do you want to play a game?');

let dollar = 0,
  prize = 0,
  userNumber,
  confirmMsg,
  dollarWin,
  confirmMsgLose;

if (mainMsg !== true) {
 alert('You did not become a billionaire, but can'); 
} else {

  const firtPrize = 100;
  const secondPrize = 50;
  const thirdPrize = 25;

  let w1 = firtPrize;
  let w2 = secondPrize;
  let w3 = thirdPrize;

  const startStep = 5;
  let initialStep = startStep;
  const step = 4;
  const attempts = 3;
  const doubling = 2;
  
let a =true;
  outer: while (a) {
    initialStep = initialStep + step;

    let randomNumber = Math.floor(Math.random() * initialStep);
    alert(randomNumber);

    myFor: for (let i = 1; i <= attempts; i++) {
      switch (i) {
        case 1:
          dollar = w1;
          break;
        case 2:
          dollar = w2;
          break;
        case 3:
          dollar = w3;
          break;
      }

      userNumber = +prompt(
        `choose an integer number in  range [0;${
          initialStep - 1
        }]  \n Attempts left:${i} \n Total prize: ${prize} $  \n Максимальный выграш: ${dollar} $ `
      );

      if (+randomNumber === +userNumber) {
        prize = prize + dollar;
        confirmMsg = confirm(
          `Congratulation, you won! Your prize is:${dollar} $. Do you want
          to continue?`
        );

        if (!confirmMsg) {
             alert (`Thank you for your participation. Your prize is: ${dollar} $`);
          break outer;
        } else {
          w1 = w1 * doubling;
          w2 = w2 * doubling;
          w3 = w3 * doubling;

          break myFor;
        }
      } else {
        if (i < attempts) {
          dollar = 0;
          alert('mistake');
        } else {
            alert (`Thank you for your participation. Your prize is: ${dollar} $`);
          confirmMsgLose = confirm(
            `Do you want to play again?`
          );
          if (confirmMsgLose) {
            initialStep = startStep;
            w1 = firtPrize;
            w2 = secondPrize;
            w3 = thirdPrize;
          } else {
            break outer;
          }
        }
      }
    }
  }
}
