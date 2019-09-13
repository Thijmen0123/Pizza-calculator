// Thijmen Hagendoorn
// Opdracht Pizza calculator
var klein = prompt('How much small pizzas do you want' );// hier kan je kiezen hoeveel kleine pizzas je wilt.
var middel= prompt('How much medium pizzas do you want');// hier kan je kiezen hoeveel medium pizzas je wilt.
var groot = prompt('How much large pizzas do you want' );// hier kan je kiezen hoeveel grote pizzas je wilt.

const small  = 7;// prijs voor kleine pizza
const medium = 10;// prijs voor medium pizza
const large  = 12;//prijs voor grote pizza

document.write ('Small='  + small   + 'euro <br><br>');
document.write ('Medium=' + medium  + 'euro <br><br>');
document.write ('Large='  + large   + 'euro <br><br>');


var smallPay = parseInt(small*klein  );//aantal small pizzas keer 7,50
var mediumPay= parseInt(medium*middel);// aantal medium pizzas keer 10
var largePay = parseInt(large*groot  );//aantal large pizzas keer 12

document.write ('aantal small pizzas<br>' + klein + '*' + small + '=' + smallPay + '<br><br>');// aantal pizzas en de prijs voor de small pizzas staan in beeld
document.write ('aantal medium pizzas<br>'+ middel+ '*' + medium+ '=' + mediumPay+ '<br><br>');// aantal pizzas en de prijs voor de medium pizzas staan in beeld
document.write ('aantal large pizzas<br>' + groot + '*' + large + '=' + largePay + '<br><br>');// aantal pizzas en de prijs voor de large pizzas staan in beeld

var totaal =   (smallPay + mediumPay + largePay  );// dit is de totaal prijs
document.write ('totaal prijs =' + totaal);// de prijs word op beeld getoond
















