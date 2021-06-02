// Your code goes here
const div = document.querySelector('.conteiner');

function getEvent(node){
    let event = prompt('Enter the name of the meeting', '');
    node.classList.remove('noShow');

    return event || 'meeting';
}

let myEvent = getEvent(div);

const listener = function (event) {
    
    if (event.target.id === 'confirm') {
        event.preventDefault();
        consoleData(myEvent);
    }
    if (event.target.id === 'converter') {
        event.preventDefault();
        convertData(validateNumber);
    }
};

div.addEventListener('click', listener);

function consoleData(myEvent) {
    let timeRegExp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
    let nameInput = document.getElementById('name1');
    let timeInput = document.getElementById('time2');
    let placeInput = document.getElementById('place3');
    
   
    let name=nameInput.value;
    let time = timeInput.value;

    let place=placeInput.value;
    if (name === '' || time === '' || place === '') {
        alert('Input all data');
    } else if (!timeRegExp.test(time)) {
                     alert('Enter time in format hh:mm');
             } else {
        console.log(name+' has a '+ myEvent +' today at '+ time +' somewhere in '+ place); 
    } 
}

function convertData(validate){
    let usdCoefficient= 27.43;
    let euroCoefficient= 33.41;

    let inpEuro = +prompt('Enter amount of euro', '');
    let validEuro = validate('Enter integer amount of euro', inpEuro);

    let tenth = 2;
    let inpUsd = +prompt('Enter amount of USD', '');
    let validUsd = validate('Enter integer amount of USD', inpUsd);
    let amountConvertedEuro = (validEuro * euroCoefficient).toFixed(tenth);
    let amountConvertedUsd = (validUsd * usdCoefficient).toFixed(tenth);
    alert(`${validEuro} euros are equal  ${amountConvertedEuro}  hrns,  
    ${validUsd}  dollars are equal  ${amountConvertedUsd} hrns`);
}

function validateNumber(message, num) {
    const inf = true;
    while (inf) {
        if (Number.isInteger(num) && num>0) {
             return num;
        }
        num = +prompt(message, '');
    }
}
