//Add task 01
function isLeapYear(year) {
   return year % 4 === 0;
}
let year = +prompt("Введите Ваш год рождения:");
if (isNaN(year)) {
   alert("Нужно ввести целое число.")
}
else {
   if (year == "" || year == null) {
      alert(`Вы ничего не ввели.`);
   }
   else
      if (isLeapYear(year)) {
         alert(`Ваш год рождения ${year} - високосный.`);
      }
      else {
         alert(`Ваш год рождения ${year} - не високосный.`);
      }
}
