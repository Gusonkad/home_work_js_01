const admin_pasword = 'adminpass'; 
let message = prompt("Введите Ваш парль:");
if (message == null) { alert('Отменено пользователем!'); }
else
if (message == admin_pasword) { alert('Добро пожаловать!'); }
else
if (message == '') { alert('Авторизация с пустым логином невозможна!'); }
else alert('Доступ запрещен, неверный пароль!');
