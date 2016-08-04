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
                    it("should show 9 high beating 8 high", function () {
                        var dealer = new PokerHandEvaluator_1.PokerHandEvaluator();
                        var hands = "Black: 2H 3D 5S 9C 6D  White: 2C 3H 4S 8C 5C";
                        expect(dealer.announceWinner(hands)).toEqual("Black wins");
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=PokerHandEvaluaterTests.js.map