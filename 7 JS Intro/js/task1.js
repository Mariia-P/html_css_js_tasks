// Your code goes here

let amountOfMoney, numberOfYyears, percentageOfYear;

amountOfMoney = +prompt('inputs initial amount of money');
numberOfYyears = +prompt('inputs number of years');
percentageOfYear = +prompt('inputs percentage of a year');
let profit = amountOfMoney;
const maxCountOfYear = 1000;
const percent = 100;
const numbersAfterComma= 2;

if (
  Number.amountOfMoney |
  Number.numberOfYyears |
  Number.percentageOfYear |
  amountOfMoney >= maxCountOfYear & percentageOfYear >= 1
) {

  for (let i = 0; i < numberOfYyears; i++) {
    profit = profit + profit * percentageOfYear / percent;
  }

  profit = profit.toFixed(2);
  
  alert(
    'Total profit' +
      ' ' +
      (profit - amountOfMoney) +
      `\n` +
      'Total amount ' +
      ' ' +
      profit
  );
  
} else {
  alert('Invalid input data');
}