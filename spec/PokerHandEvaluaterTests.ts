import {Card, Hand} from "../src/PokerHandEvaluator";

describe("PokerHandEvaluator", () => {
    
    describe("high card", () => {
        it("should have 3 beat 2", () => {
            let three: Card = new Card("3C");
            let two: Card = new Card("2C");
            expect(three.value > two.value).toBeTruthy();
        });
        it("should have T beat 9", () => {
            let ten: Card = new Card("TC");
            let nine: Card = new Card("9C");
            expect(ten.value > nine.value).toBeTruthy();
        });
    });
    
    describe("high value", () => {
        it("should get high card", () => {
            let hand: Hand = new Hand("Black: 4C 3C 2C 5C 7H");
            let highCard: number = hand.cardValues[0];
            expect(highCard).toEqual(7);
        });
        it("should value high card only as 1", () => {
            let hand: Hand = new Hand("Black: 4C 3C 2C 5C 7H");
            let handValue: number = hand.handValue;
            expect(handValue).toEqual(1);
        });
        it("should value pair as 2", () => {
            let pair: Hand = new Hand("Black: 4C 3C 2C 5C 4H");
            let handValue: number = pair.handValue;
            expect(handValue).toEqual(2);
        });
        it("should value two pair as 3", () => {
            let twoPair: Hand = new Hand("Black: 4C 2S 2C 5C 4H");
            let handValue: number = twoPair.handValue;
            expect(handValue).toEqual(3);
        });
        it("should value three of a kind as 4", () => {
            let threeOfAKind: Hand = new Hand("Black: 2C 2H 2S 5C 4H");
            let handValue: number = threeOfAKind.handValue;
            expect(handValue).toEqual(4);
        });
        it("should value straight as 5", () => {
            let straight: Hand = new Hand("Black: 2C 3H 4S 5C 6H");
            let handValue: number = straight.handValue;
            expect(handValue).toEqual(5);
        });
        it("should value flush as 6", () => {
            let flush: Hand = new Hand("Black: 2C 9C 4C 5C 6C");
            let handValue: number = flush.handValue;
            expect(handValue).toEqual(6);
        });
    });
});