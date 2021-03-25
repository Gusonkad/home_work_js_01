
let all_countries = { "Китай": 150, "Чили": 250, "Австралия": 165, "Индия": 90, "Ямайка": 130 }
try {
   let country = prompt(`Введите Вашу страну:`);
   switch (country.toUpperCase(cuntry)) {
      case 'КИТАЙ':
         console.log(`Доставка в ${Object.keys(all_countries)[0]} будет стоить ${all_countries.Китай} кредитов`);
         break;
      case 'ЧИЛИ':
         console.log(`Доставка в ${Object.keys(all_countries)[1]} будет стоить ${all_countries.Чили} кредитов`);
         break;
      case 'АВСТРАЛИЯ':
         console.log(`Доставка в ${Object.keys(all_countries)[2]} будет стоить ${all_countries.Австралия} кредитов`);
         break;
      case 'ИНДИЯ':
         console.log(`Доставка в ${Object.keys(all_countries)[3]} будет стоить ${all_countries.Индия} кредитов`);
         break;
      case 'ЯМАЙКА':
         console.log(`Доставка в ${Object.keys(all_countries)[4]} будет стоить ${all_countries.Ямайка} кредитов`);
         break;
      case country = '':
         alert('Вы ничего не ввели!');
         break;
      default:
         alert('В вашу страну доставка не доступна');
   }
} catch (err) {
   alert('Вы отменили доставку!');
} 