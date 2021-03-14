let credits = 35500;
let price_per_droid = 3000;
let order = prompt("Сколько дроидов Вы хотите купить");
let total_price = order * price_per_droid;
let rest_credits = credits - total_price; 
if (order == null) { console.log(`Отменено пользователем!`);}
   else {
     if (order == "") { console.log(`Вы ничего не заказали!`);}
     else 
       if (total_price > credits) {console.log(`Недостаточно средств на Вашем счету!`);}
         else 
           if (total_price++) {console.log(`Ваш заказ: ${order} шт`) 
             {console.log(`Вы купили ${order} дроидов, на счету осталось ${rest_credits} кредитов`);} }
}


