System.register(["../src/PokerHandEvaluator"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PokerHandEvaluator_1;
    return {
        setters:[
            function (PokerHandEvaluator_1_1) {
                PokerHandEvaluator_1 = PokerHandEvaluator_1_1;
            }],
        execute: function() {
            describe("PokerHandEvaluator", function () {
                describe("high card", function () {
                    it("should have 3 beat 2", function () {
                        var three = new PokerHandEvaluator_1.Card("3C");
                        var two = new PokerHandEvaluator_1.Card("2C");
                        expect(three.value > two.value).toBeTruthy();
                    });
                    it("should have T beat 9", function () {
                        var ten = new PokerHandEvaluator_1.Card("TC");
                        var nine = new PokerHandEvaluator_1.Card("9C");
                        expect(ten.value > nine.value).toBeTruthy();
                    });
                });
                describe("high value", function () {
                    it("should get high card", function () {
                        var hand = new PokerHandEvaluator_1.Hand("Black: 4C 3C 2C 5C 7H");
                        var highCard = hand.cardValues[0];
                        expect(highCard).toEqual(7);
                    });
                    it("should value high card only as 1", function () {
                        var hand = new PokerHandEvaluator_1.Hand("Black: 4C 3C 2C 5C 7H");
                        var handValue = hand.handValue;
                        expect(handValue).toEqual(1);
                    });
                    it("should value pair as 2", function () {
                        var pair = new PokerHandEvaluator_1.Hand("Black: 4C 3C 2C 5C 4H");
                        var handValue = pair.handValue;
                        expect(handValue).toEqual(2);
                    });
                    it("should value two pair as 3", function () {
                        var twoPair = new PokerHandEvaluator_1.Hand("Black: 4C 2S 2C 5C 4H");
                        var handValue = twoPair.handValue;
                        expect(handValue).toEqual(3);
                    });
                    it("should value three of a kind as 4", function () {
                        var threeOfAKind = new PokerHandEvaluator_1.Hand("Black: 2C 2H 2S 5C 4H");
                        var handValue = threeOfAKind.handValue;
                        expect(handValue).toEqual(4);
                    });
                    it("should value straight as 5", function () {
                        var straight = new PokerHandEvaluator_1.Hand("Black: 2C 3H 4S 5C 6H");
                        var handValue = straight.handValue;
                        expect(handValue).toEqual(5);
                    });
                    it("should value flush as 6", function () {
                        var flush = new PokerHandEvaluator_1.Hand("Black: 2C 9C 4C 5C 6C");
                        var handValue = flush.handValue;
                        expect(handValue).toEqual(6);
                    });
                    it("should value full house as 7", function () {
                        var fullHouse = new PokerHandEvaluator_1.Hand("Black: 2C 2H 4C 2S 4S");
                        var handValue = fullHouse.handValue;
                        expect(handValue).toEqual(7);
                    });
                    it("should value four of a kind as 8", function () {
                        var fourOfAKind = new PokerHandEvaluator_1.Hand("Black: 2C 2H 2D 2S 4S");
                        var handValue = fourOfAKind.handValue;
                        expect(handValue).toEqual(8);
                    });
                    it("should value straight flush as 9", function () {
                        var straightFlush = new PokerHandEvaluator_1.Hand("Black: 2C 3C 4C 5C 6C");
                        var handValue = straightFlush.handValue;
                        expect(handValue).toEqual(9);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=PokerHandEvaluaterTests.js.map