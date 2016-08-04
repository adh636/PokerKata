import {PokerHandEvaluator} from "../src/PokerHandEvaluator";

describe("PokerHandEvaluator", () => {
    describe("high card wins", () => {
        it("should show 9 high beating 8 high", () => {
            let dealer: PokerHandEvaluator = new PokerHandEvaluator();
            let hands: string = "Black: 2H 3D 5S 9C 6D  White: 2C 3H 4S 8C 5C";
            expect(dealer.announceWinner(hands)).toEqual("Black wins");
        });
    });
});