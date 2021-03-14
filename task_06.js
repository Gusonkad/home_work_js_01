function totalInput() {
   let numbers = [];
   while (true) {
     let value = prompt("Введите число:",);
     if (value === "" || value === null || !isFinite(value)) break;
     numbers.push(+value);}
   let total = 0;
   for (let number of numbers) {
     total += number;}
   return total;
 }
 alert(` Общая сумма чисел равна: ${totalInput()} `);