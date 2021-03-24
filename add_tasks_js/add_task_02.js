// Add task 02
function getRandomNumber(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
let min = 1;
let max = 10;
let guessNumber = +prompt(`Загадайте число от 1 до 10`)
if (isNaN(guessNumber)) {
   alert("Нужно ввести число!")
}
else {
   guessNumber === getRandomNumber(min, max) ?
      console.log(`Поздравляем Вы угадали число ` + getRandomNumber(min, max)) :
      console.log(`Вы не угадали, правильное число ` + getRandomNumber(min, max));
}

