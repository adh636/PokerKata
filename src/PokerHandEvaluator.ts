export class Card {
    value: number;
    faceCardValue: any = {
        "A": 14,
        "K": 13,
        "Q": 12,
        "J": 11,
        "T": 10
    };
    suit: string;

    constructor(card: string) {
        this.setCardProperties(card);
    }

    private setCardProperties(card: string) {
        this.setCardSuit(card);
        this.setCardValue(card);
    }

    private setCardSuit(card: string) {
        this.suit = card[1];
    }

    private setCardValue(card: string) {
        this.value = parseInt(card[0]);
        if (!this.value) {
            this.value = this.faceCardValue[card[0]];
        }
    }
}

export class Hand {
    cards: Card[] = [];
    description: string;

    constructor(hand: string) {
        this.setCardsAndSort(hand);
        this.setDescription();
    }

    private setCardsAndSort(hand: string): void {
        let handArr = hand.split(" ");
        this.cards = handArr.map((card) => {
            return new Card(card);
        });
        this.cards.sort((a, b) => b.value - a.value);
    }

    private setDescription() {
        this.setHighCard();
        this.checkForFullHouse();
        this.checkForFlush();
    }

    private setHighCard() {
        this.description = "high card: " + this.cards[0].value;
    }

    private checkForFullHouse() {
        if (this.threeOfAKindHighFullOfPairLow()
            || this.threeOfAKindLowFullOfPairHigh()) {
            this.description = "full house";
        }
    }

    private threeOfAKindLowFullOfPairHigh() {
        return this.cards[0].value === this.cards[1].value
            && this.cards[2].value === this.cards[3].value
            && this.cards[2].value === this.cards[4].value;
    }

    private threeOfAKindHighFullOfPairLow() {
        return this.cards[0].value === this.cards[1].value
            && this.cards[0].value === this.cards[2].value
            && this.cards[3].value === this.cards[4].value;
    }

    private checkForFlush() {
        let firstSuit = this.cards[0].suit;
        let cardsWithFirstSuit = this.cards.filter((card) => {
                return card.suit === firstSuit;
            }
        );
        if (cardsWithFirstSuit.length === 5){
            this.description = "flush";
        }
    }
}