// Your code goes here
function getAge(birthday) {
  const beginningYear = 1970;  
  let ageFull = Date.now() - birthday.getTime();
  let ageDate = new Date(ageFull);
  return Math.abs(ageDate.getUTCFullYear() - beginningYear);
}
// console.log(findAge(new Date(2000, 4, 26)));

function getWeekDay(data) {
  let week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  if (typeof data === 'number') {
    data = new Date(data);
  }
  let checkDay = data.getDay();
  for (let i = 0; i < week.length; i++) {
    if (i === checkDay) {
      return week[i];
    }
  }
}
// console.log(getWeekDay(Date.now()));
// console.log(getWeekDay(new Date(2020, 9, 22)))

function getAmountDaysToNewYear() {
  const today = new Date();
  const newYearMonth = 11;
  const newYearDate = 31;
  const amountMs = 1000;
  const amountMin = 60;
  const amontHours = 24;
  let newYear = new Date(today.getFullYear(), newYearMonth, newYearDate);
  if (today.getMonth() === newYearMonth && today.getDate() > newYearDate) {
    newYear.setFullYear(newYear.getFullYear() + 1);
  }
  let one_day = amountMs * amountMin * amountMin * amontHours;
  console.log(
    Math.ceil((newYear.getTime() - today.getTime()) / one_day) +
      ' days left until New Year!'
  );
}

// getAmountDaysToNewYear();

function getProgrammersDay(year) {
  let programmerDay = 256; 
  let month = 2; 
  let date = new Date(year, 0, programmerDay);
  let dayWeek = getWeekDay(date);
  let dateArray = date.toDateString().split(' ');
  return dateArray[month] + ' ' + dateArray[1] + ', ' + year + ' (' + dayWeek + ')';
}
// console.log(getProgrammersDay(2020));
// console.log(getProgrammersDay(2019));

function howFarIs(day) {
  const today = new Date();
  const chahgeSunday = 7;
  const todayNumber = today.getDay();
  console.log('[todayNumber]', todayNumber);
  let week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const dayRegExp =
    /^(Sunday||Monday||Tuesday||Wednesday||Thursday||Friday||Saturday)$/gi.test(
      day
    );
  if (!dayRegExp) {
    alert('Invalid data');
    return;
  }
  console.log('[dayRegExp]', dayRegExp);
  day = day
    .split(' ')
    .map((val) => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase())
    .join(' ');
  console.log('[day]', day);
  let numberDay;
  for (let i = 0; i < week.length; i++) {
    if (day === week[i]) {
      numberDay = i;
      break;
    }
  }
  console.log('[numberDay]', numberDay);
  if (todayNumber === numberDay) {
    console.log('Hey, today is ' + day + '=)');
  } else {
    if (numberDay === 0) {
      numberDay = chahgeSunday;
    }
    let difference = Math.abs(numberDay - todayNumber);
    console.log("It's " + difference + ' day(s) left till' + day);
  }
}

// howFarIs("Sunday");

function isValidIdentifier(input) {
  return /^([\D]{1})(?=.*[\d|α$_])([\w]).{2,}$/gi.test(input);
}

// console.log('[isValidIdentifier]', isValidIdentifier('1_myVar'));

function capitalize(params) {
  let test = /\s[a-z]{1}/g;

  return params.replace(test, (el) => {
    return ' ' + el.toUpperCase();
  });
}

// console.log(capitalize("My name is John Smith. I am 27."));

function isValidAudioFile(params) {
  return /^[a-z]+\.(mp3|flac|alac|aac)$/gi.test(params);
}

// console.log(isValidAudioFile('file.mp4'));
// console.log(isValidAudioFile('my_file.mp3'));
// console.log(isValidAudioFile('file.mp3'));

function getHexadecimalColors(params) {
  const test = /#[a-f0-9]{3}(?:[a-f0-9]{3})?\b/gi;
  const result = params.match(test);
  return result || [];
}

// const testString = "color: #3f3; background-color: #AA00ef; and: #abcd: red and #abcd";
// console.log(getHexadecimalColors(testString));

// console.log(getHexadecimalColors('red and #0000'));

function isValidPassword(passwopd) {
  return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/g.test(passwopd);
}

// console.log(isValidPassword('agent007'));
// console.log(isValidPassword('AGENT007'));
// console.log(isValidPassword('AgentOOO'));
// console.log(isValidPassword('Age_007'));
// console.log(isValidPassword('Agent007'));

function addThousandsSeparators(params) {
  const test = /[0-9]{3}/g;
  const test1 = /^[0-9]{1}/g;
  params = params + '';
  const tempResult = params.match(test1);
  params = params.slice(1);
  const tempSecondResult = params.match(test);
  const result = tempResult.concat(tempSecondResult).join(',');
  return result;
}

// console.log(addThousandsSeparators(1234567890));

function getAllUrlsFromText(params) {
  if (params) {
    const test =
      /(https:\/\/.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
    return params.match(test);
  }
  return 'error';
}
const text1 =
  'We use https://translate.google.com/ to translate some words and phrases from https://angular.io/ ';
const text2 = 'JavaScript is the best language for beginners!';

// console.log(getAllUrlsFromText());
