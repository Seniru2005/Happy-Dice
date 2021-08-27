




function firstImage(){
var firstdice = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var x = Math.random();
x = Math.floor(x * 6);
firstdice[x];
return firstdice[x];
}
var number1 = firstImage();
document.querySelector(".img1").setAttribute("src",number1);



function secImage(){
var secDice = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var y = Math.random();
y = Math.floor(y * 6);
secDice[y];
return secDice[y];
}
var number2 = secImage();
document.querySelector(".img2").setAttribute("src",number2);

if(number1 > number2){
    document.querySelector("h1").textContent = "🏆 Player 1 Won!!!";

}
else if (number2 > number1){
    document.querySelector("h1").textContent = "🏆 Player 2 Won!!!";
}
else{
    document.querySelector("h1").textContent = "No one has won it's a draw";
}