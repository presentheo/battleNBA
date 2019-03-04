class Card {
  constructor() {
    this.cards = [
      {id: 1, name: 'Lebron James', stars: 5, stat: [90, 80, 92, 89]},
      {id: 2, name: 'Stephen Curry', stars: 5, stat: [85, 97, 93, 75]},
      {id: 3, name: 'Kebin Durant', stars: 5, stat: [85, 97, 93, 75]},
      {id: 4, name: 'Damian Lillard', stars: 5, stat: [85, 97, 93, 75]},
      {id: 5, name: 'James Harden', stars: 5, stat: [85, 97, 93, 75]},  
    ]
  }

  pickCardById(id) {
    const foundCard = this.cards.find(c => c.id === id);
    if(foundCard) {
      return foundCard;
    }
  }

  createCardEl(item) {
    let cardEl = document.createElement('div');
    cardEl.innerHTML = `
      <div class="card" id="card${ item.id }">
        <img class="card-image" src="/assets/images/card/${ item.id }.jpg">
        <h4 class="card-name">${ item.name }</h4>
        <ul class="stat-lists">
          ${ item.stat.map(e => `<li>${ e }</li>`).join('') }
        </ul>
      </div>
    `
    return cardEl;
  }

  renderCard() {
    this.cards.forEach(e => {
      document.querySelector('.card-list').append(this.createCardEl(e));
    });
  }
}

const App = new Card();
App.renderCard();


class PickedCard extends Card{
  constructor() {
    super(Card);
    this.pickedCards = [];
  }

  setCard(card) {
    this.pickedCards.push(card);
  }

  renderPickedCard() {
    const arr = document.querySelectorAll('.picked-card-wrapper');

    for (let i = 0; i < arr.length; i++) {
      arr[i].innerHTML = '';
      // arr[i].innerHTML = this.createCardEl(this.pickedCards[i]);
      const element = this.createCardEl(this.pickedCards[i]);
      arr[i].append(element);
      console.log(element);
    }
  }

  compareCard() {
    const homeStat = this.pickedCards[0].stat;
    const awayStat = this.pickedCards[1].stat;
  
    function compare(prop1, prop2){
      if (prop1 > prop2) {
        console.log('Home Win!');
      } else if (prop1 == prop2) {
        console.log('Draw!')
      } else {
        console.log('Away Win!')
      }
    }
  
    if (homeStat.length === awayStat.length) {
      for (let i = 0; i<homeStat.length; i++){
        compare(homeStat[i], awayStat[i]);
      }
    }
  }
}

const App2 = new PickedCard();

const cardListEl = document.querySelectorAll('.card');
cardListEl.forEach(el => el.addEventListener('click', evt => {
  let clickedCardId = evt.target.closest('.card').getAttribute('id').replace('card', '') - 1;
  if (App2.pickedCards.length < 5) {
    App2.pickedCards.push(App.cards[clickedCardId]);
    App2.renderPickedCard();

  }

}))

class EnemyCard {
  constructor(){
    this.enemyCards = [];
  }
}