var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

var flipCard = function (cardID){
	checkForMatch();
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
};

flipCard(0);
flipCard(2);



