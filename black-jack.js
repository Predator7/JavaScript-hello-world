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

function shufflePlayingCards(playingCards) {
    for (let i = 0; i < playingCards.length; i++) {
        let switchCard = Math.floor(Math.random() * 52);
        let tempCard = playingCards[i];
        playingCards[i] = playingCards[switchCard];
        playingCards[switchCard] = tempCard;
    }
    return playingCards;
}

console.log(shufflePlayingCards(createPlayingCards()));