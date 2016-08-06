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
    value: number;

    constructor(hand: string) {
        this.setValues(hand);
    }
    private setValues(hand: string) {
        this.setCardValues(hand);
        this.value = this.getHandValue();
    }

    private setCardValues(hand:string) {
        let handArr = hand.split(" ");
        for (let i = 1; i < handArr.length; i++) {
            this.cardValues.push(new Card(handArr[i]).value);
        }
        this.cardValues.sort((a, b) => b - a);
    }

    private getHandValue(): number {
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
}