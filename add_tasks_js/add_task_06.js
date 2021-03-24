//Add task 06
let num1 = +prompt ('Введите первое число:');
if (isNaN(num1)) {
   alert(`Нужно ввести число!`)};
let num2 = +prompt ('Введите второе число:');
if (isNaN(num2)) {
   alert(`Нужно ввести число!`)};
let num3 = +prompt ('Введите третье число:');
if (isNaN(num3)) {
   alert(`Нужно ввести число!`)};
let numbersarr = [num1, num2, num3];
let max = Math.max(...numbersarr);
if (isNaN(max)) {
   alert(`Ошибка ввода чисел, повторите попытку заново!`)}
else {
   console.log(`Самое большое число: ` + max);}
   