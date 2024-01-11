function calculateTotalPrice(quantity = 2, price = 15000000) {
   let result = quantity * price;
   return `Cтоимость покупки: ${result.toLocaleString("ru-RU")} рублей`;
}

//=========================================1========================================================//

function clickBtn(){
   alert(calculateTotalPrice());
}

//========================================2==========================================================//

/*let text = document.getElementById("text");
console.log(text);
function clickBtn() {
   text.innerHTML = calculateTotalPrice();
}*/
