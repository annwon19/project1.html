//pizza one
var bbqpizza={
veg1:["Onion","Peppers","Cilantro"],
meat1:"Chicken",
cheese1:"Cheddar",
price1: 25
}
//pizza two
var margpizza={
veg2:["Basil,Tomatoes"],
cheese2:"Mozzarella",
price2: 20
}
//call the function to display var bbqpizza
function bbq(){
document.getElementById('veg1').innerHTML=bbqpizza.veg1
document.getElementById('meat1').innerHTML=bbqpizza.meat1
document.getElementById('cheese1').innerHTML=bbqpizza.cheese1
document.getElementById('price1').innerHTML=bbqpizza.price1
}
//call the function to the display margarita pizza
function margherita(){
document.getElementById('veg2').innerHTML=margpizza.veg2
document.getElementById('cheese2').innerHTML=margpizza.cheese2
document.getElementById('price2').innerHTML=margpizza.price2
}

//call the function to the total price of the bbq pizza with tax
function bPizza(){
  var tax=1.04712;
  var a=(25*tax).toFixed(2);
  document.getElementById('price1').innerHTML=("Your total is $"+" "+a)
}
//call the function to the total price of the margarita pizza with tax
function mPizza(){
  var tax=1.04712;
  var b=(20*tax).toFixed(2);
  document.getElementById('price2').innerHTML=("Your total is $"+" "+b)
}