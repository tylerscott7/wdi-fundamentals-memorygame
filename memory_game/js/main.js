//Card list
var cards = [
{
rank:'queen',
suit:'hearts',
cardImage: 'images/queen-of-hearts.png',
},
{
rank:'queen',
suit:'diamonds',
cardImage:'images/queen-of-diamonds.png',
},
{
rank:'king',
suit:'hearts',
cardImage:'images/king-of-hearts.png',
},
{
rank:'king',
suit:'diamonds',
cardImage:'images/king-of-diamonds.png',
}
];

var score = 0;

var addToScore = function(){
	score += 1;
	document.getElementById('score').innerHTML = "Score: " + score;
}

//Playing Boards

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
    	cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//Card Flipping
var cardsInPlay = [];

var checkForMatch = function(){
	//Based on # cards flipped over, check LAST TWO cards flipped, not first two.
	var numCards = cardsInPlay.length;
	if (cardsInPlay[numCards-2].rank === cardsInPlay[numCards-1].rank) {
		console.log("You found a match!");
		addToScore();
	} else {
		console.log("Sorry, try again.");
	}
	//Check if last card has been flipped, there is an added delay to allow time for
	//the flipped card image to load before throwing the alert into the browser
	var delayInMilliseconds = 100;
	setTimeout(function() {
	  	if (cardsInPlay.length === cards.length){
			if(!alert('Game Over! Time to try again!')){window.location.reload();};
		}
	}, delayInMilliseconds);
};

var flipCard = function (){
	var cardID = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardID].cardImage);
	console.log("User flipped " + cards[cardID].rank);
	console.log("User flipped " + cards[cardID].cardImage);
	console.log("User flipped " + cards[cardID].suit);
	cardsInPlay.push(cards[cardID]);
	if (cardsInPlay.length % 2 === 0) {
		checkForMatch();
	};
};

createBoard();



