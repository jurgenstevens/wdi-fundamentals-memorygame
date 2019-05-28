document.addEventListener("DOMContentLoaded", function(event) {

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

var checkForMatch = function(cardId) {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert('You found a match!');
        } else {
            alert('Sorry, try again.');
        }   
    }
}

  var flipCard = function(cardId) {
    var cardId = this.getAttribute('data-id');
    checkForMatch.bind(this)(cardId);
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards.rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
  }


  var createBoard = function(cardId) {
    for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', "images/back.png");
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
    }
  }

    createBoard();
});
