export class PokerHandEvaluator {
// Black: 2H 3D 5S 9C 6D  White: 2C 3H 4S 8C 5C
    hands: Hand[] = [];

    announceWinner(hands: string): string {
        this.setHands(hands);
        return this.compareCardValues();
    }

    setHands(hands: string): void {
        let handArr = hands.split(" ");
        this.hands[0]= new Hand(handArr.slice(0, 6));
        this.hands[1] = new Hand(handArr.slice(6));
    }

    compareCardValues(): string {
        for (let i = 0; i < 5; i++) {
            if (this.hands[0].cardValues[i] > this.hands[1].cardValues[i]) {
                return this.hands[0].playerName;
            }
            if (this.hands[1].cardValues[i] > this.hands[0].cardValues[i]) {
                return this.hands[1].playerName;
            }
        }
        return "Tie";
    }
}

export class Hand {
    playerName: string;
    cardValues: number[] = [];
    cardValueMap: any = {
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

    constructor(hand: string[]) {
        this.setCards(hand);
    }

    setCards(hand: string[]): void {
        this.playerName = hand[0];
        for (let i = 1; i < hand.length; i++) {
            this.cardValues[i-1] = this.cardValueMap[hand[i][0]];
        }
        this.sortCards();
    }

    sortCards(): void {
        this.cardValues.sort((a, b)=> b - a);
    }
}