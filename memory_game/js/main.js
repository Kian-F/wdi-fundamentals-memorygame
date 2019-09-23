
var cards=[
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}



];
cardsInPlay=[];
function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardId){
 
//var cardOne = cards[0];
cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log("Card suit is " + cards[cardId].suit);

//var cardTwo = cards[2];
cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId].rank);


checkForMatch();
}
flipCard(1);
flipCard(2);

console.log(cardsInPlay);
