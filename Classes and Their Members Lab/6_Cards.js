'use strict';
let result = (function () {
    class Card {
        constructor(face, suit) {
            this.check = function (face) {
                if (["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].indexOf(face) > -1) {
                    this._face = face;
                } else {
                    throw new Error('Invalid card face');
                }
            };
            this.check(face);
            this._suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(newFace) {
            this.check(newFace);
        }

        get suit() {
            return this._suit;
        }

        set suit(newSuit) {
            if (!Object.keys(Suits).map(
                    k => Suits[k]).includes(newSuit))throw new Error("Invalid card suite: " + newSuit);
            this._suit = newSuit;
        }

        toString() {
            return `${this._face}${this._suit}`
        }

    }

    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };
    return {
        Suits: Suits,
        Card: Card
    }
}());
//Test the code
// let Card = result.Card;
// let Suits = result.Suits;
//
// let card = new Card('Q', Suits.CLUBS);
// card.face = 'A';
// card.suit = Suits.DIAMONDS;






