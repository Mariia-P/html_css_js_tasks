// Your code goes here

function isEquals(firstElement, secondElement) {
    return Object.is(firstElement, secondElement);
  }

//   let a = isEquals(4, 3);
//   console.log('[a]', a);


  function isBigger(firstElement, secondElement) {
    switch (firstElement>secondElement) {
        case true: 
        return true;
        case false: 
        return false;
      }
  }

//   let a1 = isBigger(8, 6);
//   console.log('[a1]', a1);

function storeNames(){
    let array=[];
for(let i =0; i<arguments.length; i++){
array.push(arguments[i]);
}
return array;
}

// let a3=storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy');
// console.log('[a3]', a3);


function getDifference(a, b){
    switch (a>b) {
        case true: 
        return a-b;
        case false: 
        return b-a;
      }
}

// let a4 =getDifference(5, 8);
// console.log('[a4]', a4);

function negativeCount(array) {

     let negative = array.reduce(function (accum, neg) {
         if(neg<0){
 accum++; 
}
         return accum;
        }, 0);
    return negative;
}

// let a5= negativeCount([0, 3, 5, 7]);
// console.log('[a5]', a5);

function letterCount (firstString, secondString){
return (firstString.match(new RegExp(secondString, 'g')) || []).length;
}

function countPoints(collection){

let result = collection.reduce(function (accum, neg) {
    let arr=neg;
    let part1= arr.split(':');
    let x = +part1[0];
    let y = +part1[1];
if(x>y) {
    accum=accum+3;
} else {
 if(x===y){
    accum++;
    
} else {
 accum= accum+0 
}
}
    return accum;
   }, 0);

   return result;
}

