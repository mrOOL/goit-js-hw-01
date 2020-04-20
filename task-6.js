let input;
let cancel;
let total = 0;
do {
  input = prompt('Введите число:');
  cancel = input;
  input = Number(input);
  if (Number.isNaN(input) === true) {
    alert('Вы ввели не число. Попробуйте еще раз');
  } else {
    input = Number(input);
    total += input;
    console.log(total);
        } 
   }    
while (cancel !== null);
alert(`Общая сумма чисел равна ${total}`);