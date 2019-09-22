
cards=["queen","queen","king","King"];
cardsInPlay=[];
function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardId){
 
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cards[cardId]);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cards[cardId]);


checkForMatch();
}
flipCard(1);
//flipCard(2);

console.log(cardsInPlay);
