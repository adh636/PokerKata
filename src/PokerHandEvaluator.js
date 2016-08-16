System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dealer, Card, Hand;
    return {
        setters:[],
        execute: function() {
            Dealer = (function () {
                function Dealer() {
                }
                Dealer.prototype.getWinner = function (blackHand, whiteHand) {
                    if (blackHand.handValue > whiteHand.handValue)
                        return blackHand.playerName;
                    if (whiteHand.handValue > blackHand.handValue)
                        return whiteHand.playerName;
                    for (var i = 0; i < 5; i++) {
                        if (blackHand.cardValues[i] > whiteHand.cardValues[i])
                            return blackHand.playerName;
                        if (whiteHand.cardValues[i] > blackHand.cardValues[i])
                            return whiteHand.playerName;
                    }
                    return "Tie";
                };
                return Dealer;
            }());
            exports_1("Dealer", Dealer);
            Card = (function () {
                function Card(card) {
                    this.cardValueMap = {
                        "T": 10,
                        "J": 11,
                        "Q": 12,
                        "K": 13,
                        "A": 14
                    };
                    this.setCard(card);
                }
                Card.prototype.setCard = function (card) {
                    this.name = card;
                    if (parseInt(card[0])) {
                        this.value = parseInt(card[0]);
                    }
                    else {
                        this.value = this.cardValueMap[card[0]];
                    }
                };
                return Card;
            }());
            exports_1("Card", Card);
            Hand = (function () {
                function Hand(hand) {
                    this.cards = [];
                    this.cardValues = [];
                    this.flush = true;
                    // handValueMap: any = [
                    //     [this.isStraightFlush(), 9],
                    //     [this.isFourOfAKind(), 8],
                    //     [this.isFullHouse(), 7],
                    //     [this.isFlush(), 6],
                    //     [this.isStraight(), 5],
                    //     [this.isThreeOfAKind(), 4],
                    //     [this.isTwoPair(), 3],
                    //     [this.isPair(), 2]
                    // ];
                    this.func = this.isStraightFlush();
                    this.isStraightFlush = function () {
                        if (this.flush && this.isStraight())
                            return true;
                        return false;
                    };
                    this.setValues(hand);
                }
                Hand.prototype.setValues = function (hand) {
                    this.setCardValues(hand);
                    this.handValue = this.getHandValue();
                };
                Hand.prototype.setCardValues = function (hand) {
                    var handArr = hand.split(" ");
                    this.playerName = handArr[0].substring(0, handArr[0].length - 1);
                    var suit = handArr[1][1];
                    for (var i = 1; i < handArr.length; i++) {
                        this.cardValues.push(new Card(handArr[i]).value);
                        this.flush = (suit === handArr[i][1]);
                    }
                    this.cardValues.sort(function (a, b) { return b - a; });
                };
                Hand.prototype.getHandValue = function () {
                    // for (let hand of this.handValueMap) {
                    //     if (hand[0]) {
                    //         return hand[1];
                    //     }
                    // }
                    if (this.isStraightFlush())
                        return 9;
                    if (this.isFourOfAKind())
                        return 8;
                    if (this.isFullHouse())
                        return 7;
                    if (this.flush)
                        return 6;
                    if (this.isStraight())
                        return 5;
                    if (this.isThreeOfAKind())
                        return 4;
                    if (this.isTwoPair())
                        return 3;
                    if (this.isPair())
                        return 2;
                    return 1;
                };
                Hand.prototype.isPair = function () {
                    for (var i = 0; i < this.cardValues.length - 1; i++) {
                        if (this.cardValues[i] === this.cardValues[i + 1]) {
                            return true;
                        }
                    }
                    return false;
                };
                Hand.prototype.isTwoPair = function () {
                    var pairCount = 0;
                    for (var i = 0; i < this.cardValues.length - 1; i++) {
                        if (this.cardValues[i] === this.cardValues[i + 1]) {
                            pairCount++;
                        }
                    }
                    if (pairCount === 2) {
                        return true;
                    }
                    return false;
                };
                Hand.prototype.isThreeOfAKind = function () {
                    for (var i = 0; i < this.cardValues.length - 2; i++) {
                        if (this.cardValues[i] === this.cardValues[i + 1] && this.cardValues[i] === this.cardValues[i + 2]) {
                            return true;
                        }
                    }
                    return false;
                };
                Hand.prototype.isStraight = function () {
                    for (var i = 0; i < this.cardValues.length - 1; i++) {
                        if (this.cardValues[i] !== this.cardValues[i + 1] + 1) {
                            return false;
                        }
                    }
                    return true;
                };
                Hand.prototype.isFullHouse = function () {
                    for (var i = 0; i < this.cardValues.length - 2; i++) {
                        if (this.cardValues[i] === this.cardValues[i + 1] && this.cardValues[i] === this.cardValues[i + 2]) {
                            if (i === 0 && this.cardValues[3] === this.cardValues[4]) {
                                return true;
                            }
                            if (i === 2 && this.cardValues[0] === this.cardValues[1]) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                Hand.prototype.isFourOfAKind = function () {
                    for (var i = 0; i < this.cardValues.length - 3; i++) {
                        if (this.cardValues[i] === this.cardValues[i + 1] && this.cardValues[i] === this.cardValues[i + 2]
                            && this.cardValues[i] === this.cardValues[i + 3]) {
                            return true;
                        }
                    }
                    return false;
                };
                Hand.prototype.isFlush = function () {
                    return this.flush;
                };
                return Hand;
            }());
            exports_1("Hand", Hand);
        }
    }
});
//# sourceMappingURL=PokerHandEvaluator.js.map