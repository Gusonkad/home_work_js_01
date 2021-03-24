//Add task 04
function celToFar(cel) {
   const w = 1.8;
   const b = 32;
   const f = cel * w + b;
   return f;
 };
 let cel = +prompt ('Введите температуру в градусах Цельсия', '');
 console.log(`Температура: ${celToFar(cel).toFixed(2)} градусов Фаренгейта`);

 function farToCel(far) {
   const w = 1.8;
   const b = 32;
   const c = (far - b) / w;
   return c;
 };
 let far = +prompt ('Введите температуру в градусах Фаренгейта', '');
 console.log(`Температура: ${farToCel(far).toFixed(2)} градусов Цельсия`);
