class Card {
  constructor (rank, suit) {
    this.rank = rank
    this.suit = suit
  }
}

class Deck {
  constructor () {
    this.cards = []
  }

  add (card) {
    this.cards.push(card)
  }

  filter (suit) {
    return this.cards.filter(card => {
      return card.suit === suit
    })
  }

  populate (array) {
    array.forEach(card => {
      card = new Card(card[0], card[1])
      this.cards.push(card)
    })
  }
}



module.exports = {
  Card,
  Deck
};

