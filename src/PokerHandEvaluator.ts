export class Card {
    name: string;
    value: number;
    cardValueMap: any = {
        "T": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    };
    
    constructor(card: string) {
        this.setCard(card);
    }

    private setCard(card: string) {
        this.name = card;
        if (parseInt(card[0])) {
            this.value = parseInt(card[0]);
        }
        else {
            this.value = this.cardValueMap[card[0]];
        }
    }
}

export class Hand {
    cards: Card[] = [];
    cardValues: number[] = [];
    handValue: number;
    flush: boolean = true;

    constructor(hand: string) {
        this.setValues(hand);
    }
    private setValues(hand: string) {
        this.setCardValues(hand);
        this.handValue = this.getHandValue();
    }

    private setCardValues(hand:string) {
        let handArr = hand.split(" ");
        let suit: string = handArr[1][1];
        for (let i = 1; i < handArr.length; i++) {
            this.cardValues.push(new Card(handArr[i]).value);
            this.flush = (suit === handArr[i][1]);
        }
        this.cardValues.sort((a, b) => b - a);
    }

    private getHandValue(): number {
        if (this.isFullHouse()) return 7;
        if (this.flush) return 6;
        if (this.isStraight()) return 5;
        if (this.isThreeOfAKind()) return 4;
        if (this.isTwoPair()) return 3;
        if (this.isPair()) return 2;
        return 1;
    }

    private isPair(): boolean {
        for (let i = 0; i < this.cardValues.length-1; i++) {
            if (this.cardValues[i] === this.cardValues[i+1]) {
                return true;
            }
        }
        return false;
    }

    private isTwoPair() {
        let pairCount = 0;
        for (let i = 0; i < this.cardValues.length-1; i++) {
            if (this.cardValues[i] === this.cardValues[i+1]) {
                pairCount++;
            }
        }
        if (pairCount === 2) {
            return true;
        }
        return false;
    }


    private isThreeOfAKind() {
        for (let i = 0; i < this.cardValues.length-2; i++) {
            if (this.cardValues[i] === this.cardValues[i+1] && this.cardValues[i] === this.cardValues[i+2]) {
                return true;
            }
        }
        return false;
    }

    private isStraight() {
        for (let i = 0; i < this.cardValues.length-1; i++) {
            if (this.cardValues[i] !== this.cardValues[i+1] + 1) {
                return false;
            }
        }
        return true;
    }

    private isFullHouse() {
        for (let i = 0; i < this.cardValues.length-2; i++) {
            if (this.cardValues[i] === this.cardValues[i+1] && this.cardValues[i] === this.cardValues[i+2]) {
                if (i === 0 && this.cardValues[3] === this.cardValues[4]) {
                    return true;
                }
                if (i === 2 && this.cardValues[0] === this.cardValues[1]) {
                    return true;
                }
            }
        }
        return false;
    }
}