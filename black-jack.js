//
// JavaScript Black Jack learning game
//

let shuffledCards = [],
    dealerCards = [],
    playerCards = [];

let gameStart = false;

let dealButton = document.getElementById("play-button");
let contentArea = document.getElementById("content-area");

dealButton.addEventListener("click", function() {
    contentArea.innerText = "";
    dealButton.style.display = "none";
    startGame();
});

function startGame() {
    gameStart = true;
    shuffledCards = shufflePlayingCards(createPlayingCards());

    // Push 2 cards to each player
    dealerCards.push(shuffledCards.shift());
    dealerCards.push(shuffledCards.shift());

    playerCards.push(shuffledCards.shift());
    playerCards.push(shuffledCards.shift());

    displayCards(dealerCards, "Dealer");
    displayCards(playerCards, "Player");
}

// Display player cards to content-area
function displayCards(cards, playerName) {
    contentArea.innerText += playerName + ": \n";
    for (let i = 0; i < cards.length; i++) {
        contentArea.innerText += cards[i].cardName + "\n";
    }
    contentArea.innerText += "Total: " + calculateScore(cards) + "\n";
    contentArea.innerText += "\n";
}

// Calculate cards total score
function calculateScore(cards) {
    let score = 0;
    for (let i = 0; i < cards.length; i++) {
        score += cards[i].cardValue;
    }
    return score;
}

// Creates sorted playingCards object array
function createPlayingCards() {
    let suites = ["Spades", "Hearts", "Clubs", "Diamonds"],
        values = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
                  "Jack", "Queen", "King", "Ace"];
    
    let playingCards = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suites.length; j++) {

            let value = i + 2;
            if (value > 10) value = 10;
            if (values[i] === "Ace") value = 11;

            playingCards.push({
                cardName: values[i] + " of " + suites[j],
                cardValue: value
            });
        }
    }
    return playingCards;
}

// Shuffles playingCards object array
function shufflePlayingCards(playingCards) {
    for (let i = 0; i < playingCards.length; i++) {
        let switchCard = Math.floor(Math.random() * 52);
        let tempCard = playingCards[i];
        playingCards[i] = playingCards[switchCard];
        playingCards[switchCard] = tempCard;
    }
    return playingCards;
}