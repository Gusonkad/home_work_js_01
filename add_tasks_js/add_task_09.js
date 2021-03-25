//Add task 09
let userChoice = prompt('Выберите пожалуйста: камень, ножницы, бумага?');
let computerChoice = Math.random();
userChoice = userChoice.toLowerCase(userChoice);
if (computerChoice < 0.34) {
   computerChoice = 'камень';
} else if (computerChoice <= 0.67) {
   computerChoice = 'бумага';
} else {
   computerChoice = 'ножницы';
} console.log('Выбор компьютера ' + '"' + computerChoice + '"');
let choice1 = userChoice;
let choice2 = computerChoice;
let compare = function (choice1, choice2) {
   if (choice1 === choice2) {
      return 'Ничья!';
   }
   else if (choice1 === 'камень') {
      if (choice2 === 'ножницы') {
         return 'Победитель "Камень"!';
      }
      else {
         return 'Победитель "Бумага"!';
      }
   }
   else if (choice1 === 'бумага') {
      if (choice2 === 'камень') {
         return 'Победитель "Бумага"!';
      }
      else {
         return 'Победитель "Ножницы"!';
      }
   }
   else if (choice1 === 'ножницы') {
      if (choice2 === 'бумага') {
         return 'Победитель "Ножницы"!';
      }
      else {
         return 'Победитель "Камень"!';
      }
   }
}
console.log(compare(choice1, choice2));
