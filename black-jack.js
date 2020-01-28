//
// JavaScript Black Jack learning game
//

// Global card arrays
let shuffledCards = [],
    dealerCards = [],
    playerCards = [];

// Game options
const blackJack = 21;
let playerWins = false;

// DOM elements
let dealButton = document.getElementById("play-button"),
    hitButton = document.getElementById("hitme-button"),
    stayButton = document.getElementById("stay-button");

let contentArea = document.getElementById("content-area");

//
// Event listeners
//

dealButton.addEventListener("click", function() {
    contentArea.innerText = "";
    dealButton.style.display = "none";
    startGame();
});

hitButton.addEventListener("click", function() {
    playerCards.push(shuffledCards.shift());
    displayAllCards();
});

//
// Functions
//

// Start game and give each player 2 cards
function startGame() {
    shuffledCards = shufflePlayingCards(createPlayingCards());

    getStartingCards();
    displayAllCards();

    if (checkForGameOver()) displayGameResult();
}

// Push 2 cards to each player
function getStartingCards() {
    dealerCards.push(shuffledCards.shift());
    dealerCards.push(shuffledCards.shift());

    playerCards.push(shuffledCards.shift());
    playerCards.push(shuffledCards.shift());
}

// Checks for game over and decides who won
function checkForGameOver() {
    if (calculateScore(playerCards) === blackJack) {
        playerWins = true;
        return true;
    }
}

// Display both player and dealer cards
function displayAllCards() {
    contentArea.innerText = "";
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

// Display if you win or lose
function displayGameResult() {
    contentArea.innerText += "\n"
    if (playerWins) {
        contentArea.innerText += "Congratulations! You win!";
    } else {
        contentArea.innerText += "You Lost!";
    }
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