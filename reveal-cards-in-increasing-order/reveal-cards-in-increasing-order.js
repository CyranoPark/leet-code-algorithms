/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const newDeck = [];
    const length = deck.length;
    deck.sort((a, b) => a - b);
    
    for (let i = 0; i < length; i++) {
        const revealed = deck.pop();
        swapLastToFirst();
        newDeck.splice(0, 0, revealed);
    }

    return newDeck;
    
    function swapLastToFirst() {
        if (newDeck.length < 2) return;
        
        const last = newDeck.pop();
        newDeck.splice(0, 0, last);
    }
};