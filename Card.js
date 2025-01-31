const cardTemplate = document.querySelector(".card__template").content;

export default class Card {
  constructor(link, name) {
    (this._link = link), (this._name = name);
  }
  getTemplate() {
    /* const newCard = cardTemplate.querySelector(".card").cloneNode(true);*/
    return cardTemplate.querySelector(".card").cloneNode(true);
  }

  toggleLike() {
    this.cardLikeButton.classList.toggle(
      "card__like_active"
    ); /* likeButton.classList.toggle("card__like_active");*/
  }

  removeCard() {
    this.htmlCard.remove();
  }

  setEventListeners() {
    this.cardLikeButton.addEventListener("click", () => {
      this.toggleLike();
    });
    this.cardTrashButton.addEventListener("click", () => {
      this.removeCard();
    });
  }

  setProperties() {
    this.htmlCard = this.getTemplate();
    this.cardImage = this.htmlCard.querySelector(".card__image");
    this.cardTitle = this.htmlCard.querySelector(".card__title");
    this.cardLikeButton = this.htmlCard.querySelector(".card__like");
    this.cardTrashButton = this.htmlCard.querySelector(".card__trash");
    this.cardTitle.textContent = this._name;
    this.cardImage.src = this._link;
  }

  setCard() {
    this.setProperties();
    this.setEventListeners();
    return this.htmlCard;
  }
}


/*
export default class Card{
constructor(name, link, cardSelector){
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
}
    
getTemplate() {
    return cardTemplate.querySelector(".card").cloneNode(true);

_setEventListeners(){
this._handleImageClick()
this._handleLikeButton()
this._handleDeleteButton()
}