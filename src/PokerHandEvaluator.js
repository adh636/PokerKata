System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PokerHandEvaluator, Hand;
    return {
        setters:[],
        execute: function() {
            PokerHandEvaluator = (function () {
                function PokerHandEvaluator() {
                    // Black: 2H 3D 5S 9C 6D  White: 2C 3H 4S 8C 5C
                    this.hands = [];
                }
                PokerHandEvaluator.prototype.announceWinner = function (hands) {
                    this.setHands(hands);
                    return this.compareCardValues();
                };
                PokerHandEvaluator.prototype.setHands = function (hands) {
                    var handArr = hands.split(" ");
                    this.hands[0] = new Hand(handArr.slice(0, 6));
                    this.hands[1] = new Hand(handArr.slice(6));
                };
                PokerHandEvaluator.prototype.compareCardValues = function () {
                    for (var i = 0; i < 5; i++) {
                        if (this.hands[0].cardValues[i] > this.hands[1].cardValues[i]) {
                            return this.hands[0].playerName;
                        }
                        if (this.hands[1].cardValues[i] > this.hands[0].cardValues[i]) {
                            return this.hands[1].playerName;
                        }
                    }
                    return "Tie";
                };
                return PokerHandEvaluator;
            }());
            exports_1("PokerHandEvaluator", PokerHandEvaluator);
            Hand = (function () {
                function Hand(hand) {
                    this.cardValues = [];
                    this.cardValueMap = {
                        "2": 2,
                        "3": 3,
                        "4": 4,
                        "5": 5,
                        "6": 6,
                        "7": 7,
                        "8": 8,
                        "9": 9,
                        "T": 10,
                        "J": 11,
                        "Q": 12,
                        "K": 13,
                        "A": 14
                    };
                    this.setCards(hand);
                }
                Hand.prototype.setCards = function (hand) {
                    this.playerName = hand[0];
                    for (var i = 1; i < hand.length; i++) {
                        this.cardValues[i - 1] = this.cardValueMap[hand[i][0]];
                    }
                    this.sortCards();
                };
                Hand.prototype.sortCards = function () {
                    this.cardValues.sort(function (a, b) { return b - a; });
                };
                return Hand;
            }());
            exports_1("Hand", Hand);
        }
    }
});
//# sourceMappingURL=PokerHandEvaluator.js.map