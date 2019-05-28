var cards = [
    {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
    },
    {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
    },
    {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
    },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
    },
];

var cardsInPlay =[];

var checkForMatch = function() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert('You found a match!');
        } else {
            alert('Sorry, try again.');
        }   
    }
}

function flipCard(cardId) {
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
}

flipCard(0);
flipCard(2);

/*
var myArray = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
},
];
var cardsInPlay = [];
var card = [
    {

    }
]

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert('You found a match!');
    } else {
        alert('Sorry, try again.');
    }   
}
var flipCard = function(cardId) {
    for(var cardId = 0; cardId < myArray.length; cardId++) 
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[0]);
    if (cardsInPlay.length === 2) {
        checkForMatch();
  }
}

var eventHandler = function() {
    console.log("clicked");
}
flipCard(0);
flipCard(1);
*/