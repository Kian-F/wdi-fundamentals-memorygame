
cards=["queen","queen","king","King"];
cardsInPlay=[];
var cardOne;
cardOne = cards[1];
cardsInPlay.push(cardOne);
cardTwo = cards[3];
cardsInPlay.push(cardTwo);
if(cardsInPlay.length === 2){
	if(cardsInPlay[0] ===cardsInPlay[1]){
		alert("You found a match!");
	}else{alert("Sorry, try again.")}
	
}



console.log("User flipped king");
console.log("User flipped queen");