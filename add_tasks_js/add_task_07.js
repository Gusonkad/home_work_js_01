//Add task 07
const marks = ['A', 'B', 'C', 'D', 'E', 'F'];
let mark = prompt('Введите суму балов:');
if (mark === null) { console.log(`Отменено пользователем!`) }
else {
   if (mark <= 20) {
      console.log(`Ваша оценка: ` + marks[5]);
   } else
      if (mark > 20 && mark <= 44) {
         console.log(`Ваша оценка: ` + marks[4]);
      } else
         if (mark > 44 && mark <= 59) {
            console.log(`Ваша оценка: ` + marks[3]);
         } else
            if (mark > 59 && mark <= 74) {
               console.log(`Ваша оценка: ` + marks[2]);
            } else
               if (mark > 74 && mark <= 88) {
                  console.log(`Ваша оценка: ` + marks[1]);
               } else
                  if (mark > 88 && mark <= 100) {
                     console.log(`Ваша оценка: ` + marks[0]);
                  }
                  else {
                     console.log(`Ошибка! Попроуйте сначала.`);
                  }
}
