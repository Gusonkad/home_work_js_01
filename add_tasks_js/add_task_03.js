//Add task 03
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
let operSign = prompt("Введите знак операции", "");
let sum = a + b, min = a - b, mult = a * b, divis = a / b;
switch (operSign) {
   case '+':
      console.log(`Сума чисел a i b = ` + sum);
      break
   case '-':
      console.log(`Разница чисел a i b = ` + min);
      break
   case '*':
      console.log(`Произведение чисел a i b = ` + mult);
      break
   case '/':
      console.log(`Часть от деления чисел a i b = ` + divis);
      break
   default:
      console.log(`Что то пошло не так!`);
      break
}
