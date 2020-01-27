//
// JavaScript Black Jack learning game
//

function createPlayingCards() {
    let suites = ["Spades", "Hearts", "Clubs", "Diamonds"],
        values = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
                  "Jack", "Queen", "King", "Ace"];
    
    let playingCards = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suites.length; j++) {
            playingCards.push({
                cardName: values[i] + " of " + suites[j]
            });
        }
    }
    return playingCards;
}

console.log(createPlayingCards());