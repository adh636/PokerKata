System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Card, Hand;
    return {
        setters:[],
        execute: function() {
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
                    this.setValues(hand);
                }
                Hand.prototype.setValues = function (hand) {
                    this.setCardValues(hand);
                    this.handValue = this.getHandValue();
                };
                Hand.prototype.setCardValues = function (hand) {
                    var handArr = hand.split(" ");
                    var suit = handArr[1][1];
                    for (var i = 1; i < handArr.length; i++) {
                        this.cardValues.push(new Card(handArr[i]).value);
                        this.flush = suit === handArr[i][1];
                    }
                    this.cardValues.sort(function (a, b) { return b - a; });
                };
                Hand.prototype.getHandValue = function () {
                    if (this.flush) {
                        return 6;
                    }
                    if (this.isStraight()) {
                        return 5;
                    }
                    if (this.isThreeOfAKind()) {
                        return 4;
                    }
                    if (this.isTwoPair()) {
                        return 3;
                    }
                    if (this.isPair()) {
                        return 2;
                    }
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