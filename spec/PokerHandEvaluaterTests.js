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
                describe("high card wins", function () {
                    it("should show black win with 9 high beating 8 high", function () {
                        var dealer = new PokerHandEvaluator_1.PokerHandEvaluator();
                        var hands = "Black: 2H 3D 5S 9C 6D White: 2C 3H 4S 8C 5C";
                        expect(dealer.announceWinner(hands)).toEqual("Black:");
                    });
                    it("should show white win with 9 high beating 8 high", function () {
                        var dealer = new PokerHandEvaluator_1.PokerHandEvaluator();
                        var hands = "Black: 2H 3D 5S 8C 6D White: 2C 3H 4S 9C 5C";
                        expect(dealer.announceWinner(hands)).toEqual("White:");
                    });
                    it("should show a tie when all cards have same value", function () {
                        var dealer = new PokerHandEvaluator_1.PokerHandEvaluator();
                        var hands = "Black: 2H 3D 5S 8C 6D White: 2C 6H 5D 8S 3C";
                        expect(dealer.announceWinner(hands)).toEqual("Tie");
                    });
                    it("should show black win with top 4 cards the same", function () {
                        var dealer = new PokerHandEvaluator_1.PokerHandEvaluator();
                        var hands = "Black: 7H 3D 5S 8C 6D White: 2C 6H 5D 8S 7C";
                        expect(dealer.announceWinner(hands)).toEqual("Black:");
                    });
                });
                describe("");
            });
        }
    }
});
//# sourceMappingURL=PokerHandEvaluaterTests.js.map