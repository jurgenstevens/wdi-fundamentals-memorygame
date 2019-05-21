console.log("Up and running!");

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
var cardOne = ["queen"];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo = ["queen"];
cardsInPlay.push(cardTwo);
console.log("User flipped queen");

if(cardsInPlay.length === 2){ 
	console.log("you have selected two cards"); 
	if (cardsInPlay[0] === cardsInPlay[1]) 
		alert("You found a match!"); 
	else 
		alert("Sorry, try again"); 
}