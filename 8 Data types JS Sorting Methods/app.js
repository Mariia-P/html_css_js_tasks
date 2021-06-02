function reverseNumber(num) {
  if (!Number.isFinite(num)) {
    return 0;
  }
  let num1;
  let tenth = 10;
  let neg = -1;
  if (num < 0) {
    num1 = Math.abs(num);
    let result = 0;
    while (num1) {
      result = result * tenth + num1 % tenth;
      num1 = Math.floor(num1 / tenth);
    }
    return result * neg;
  } else {
    let result = 0;
    while (num) {
      result = result * tenth + num % tenth;
      num = Math.floor(num / tenth);
    }

    return result;
  }
}

function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

function map(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = func(arr[i]);
  }
  return newArr;
}


function filter(arr, func) {
  let marker = [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    marker[i] = func(arr[i]);
    if (marker[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function getAdultAppleLovers(data) {
  let newArr = [];
  for (let i = 0; i < data.length; i++) {
    let unit = data[i];
    let adult = 18;

    if (unit['age'] > adult && unit['favoriteFruit'] === 'apple') {
      newArr.push(unit['name']);
    }
    continue;
  }
  return newArr;
}

function getKeys(obj) {
  let newArr = [];
  for (const key in obj) {
    newArr.push(key);
  }
  return newArr;
}

function getValues(obj) {
  let newArr = [];
  for (const key in obj) {
    newArr.push(obj[key]);
  }
  return newArr;
}

function showFormattedDate(dateObj) {
  let stringDate = dateObj;
  let s1 = stringDate.toString();
  let date = dateObj.getDate();
  let year = dateObj.getFullYear();
  return `It is ${date} of ${s1[4]}${s1[5]}${s1[6]} ${year}`;
}
