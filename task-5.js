let deliveryCost = 0;
let deliveryCountry = prompt('Укажите страну доставки:');
let lowerCountry = deliveryCountry.toLowerCase();
console.log(lowerCountry);

switch (lowerCountry) {
  case 'китай':
    deliveryCost = 100;
    alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`,);
    break;
  case 'чили':
    deliveryCost = 250;
    alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`,);
    break;
  case 'австралия':
    deliveryCost = 170;
    alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`,);
    break;
  case 'индия':
    deliveryCost = 80;
    alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`,);
    break;
  case 'ямайка':
    deliveryCost = 120;
    alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов`,);
    break;
  default:
    alert('В вашей стране доставка не доступна');
}