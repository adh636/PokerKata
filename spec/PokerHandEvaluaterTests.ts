import {Card, Hand} from "../src/PokerHandEvaluator";
describe("PokerHandEvaluator", () => {
    describe("Card", () => {
        it("should value three as 3", () => {
            let three: Card = new Card("3H");
            expect(three.value).toEqual(3);
        });
        it("should value king as 13", () => {
            let king: Card = new Card("KH");
            expect(king.value).toEqual(13);
        });
    });
    describe("Hand", () => {
        it("should get high card in descending order", () => {
            let nineHigh: Hand = new Hand("9H 8H 6H 4S 2S");
            expect(nineHigh.cards[0].value).toEqual(9);
        });
        it("should get high card when unordered", () => {
            let nineHigh: Hand = new Hand("2H 8H 6H 4S 9S");
            expect(nineHigh.cards[0].value).toEqual(9);
        });
        it("should describe high card", () => {
            let nineHigh: Hand = new Hand("9H 8H 6H 4S 2S");
            expect(nineHigh.description).toEqual("high card: 9");
        });
        it("should describe full house with three of a kind high full of pair low", () => {
            let fullHouse: Hand = new Hand("2H 5C 5S 2S 5D");
            expect(fullHouse.description).toEqual("full house");
        });
        it("should describe full house with three of a kind low full of pair high", () => {
            let fullHouse: Hand = new Hand("2H 2C 5S 2S 5D");
            expect(fullHouse.description).toEqual("full house");
        });
        it("should describe flush", () => {
            let flush: Hand = new Hand("2H 3H 5H 6H 8H");
            expect(flush.description).toEqual("flush");
        });
    });
});