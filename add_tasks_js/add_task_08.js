//Add task 08
let minutesAmount = prompt('Введить количество минут:');
let h = minutesAmount / 60 ^ 0;
if (h) {
   let m = minutesAmount % 60;
   if (m < 10) m = '0' + m;
   minutesAmount = h + ':' + m;
} else {
   minutesAmount = minutesAmount + ' м';
}
console.log(minutesAmount);
