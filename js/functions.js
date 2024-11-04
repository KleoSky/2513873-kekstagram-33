// Функция проверки длины строки

function compareLengthOfStrings(stringText, stringLength) {
  return stringText.length <= stringLength;
}
compareLengthOfStrings('Проверяющая строка для теста функции', 50);

// Функция проверки на палиндромность

function checkIdentical(string) {
  let stringTest = '';
  const stringNormalize = string.replaceAll(' ', '').toLowerCase();

  for (let i = stringNormalize.length - 1; i >= 0; i--) {
    stringTest += stringNormalize[i];
  }

  return stringNormalize === stringTest;
}

checkIdentical('Лёша на полке клопа нашёл ');

// Функция извлечения чисел из строк

function extractTheNumbers(stringToNumber) {
  stringToNumber.toString();
  let stringResult = '';
  for (let i = 0; i <= stringToNumber.length - 1; i++) {
    if (!Number.isNaN(parseInt(stringToNumber[i], 10))) {
      stringResult += stringToNumber[i];
    }
  }
  return parseInt(stringResult, 10);
}
extractTheNumbers('2024 год очень знаменателен, в отличие от 2023го');


// ЗАДАЧА 2 МОДУЛЯ 5 //

// Функция перевода времени в минуты
const getMinutes = (string) => {
  const arrayFromString = string.split(':');
  const minutes = (parseInt(arrayFromString[0], 10) * 60) + (parseInt(arrayFromString[1], 10));
  return minutes;
};

const getMeetingTimeValid = (startWorkDay, endWorkDay, startMeeting, durationMeeting) => {
  const startWorkDayInMinutes = getMinutes(startWorkDay);
  const endWorkDayInMinutes = getMinutes(endWorkDay);
  const startMeetingInMinutes = getMinutes(startMeeting);

  return !!((startMeetingInMinutes >= startWorkDayInMinutes && (startMeetingInMinutes + durationMeeting) <= endWorkDayInMinutes));
};

getMeetingTimeValid('08:00', '17:30', '14:00', 90); // true
getMeetingTimeValid('8:0', '10:0', '8:0', 120); // true
getMeetingTimeValid('08:00', '14:30', '14:00', 90); // false
getMeetingTimeValid('14:00', '17:30', '08:0', 90); // false
getMeetingTimeValid('8:00', '17:30', '08:00', 900); // false
