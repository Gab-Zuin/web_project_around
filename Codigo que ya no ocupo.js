function cardCreate(name, link) {
  const Card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = Card.querySelector(".card__image");
  const cardTitle = Card.querySelector(".card__place");

  const likeButton = newCard.querySelector(".card__like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like_active");
  });

  cardImage.addEventListener("click", () => {
    openPopupImage(name, link);
  });

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  return Card;
}

//CLASE CARD

const cardTemplate = document.querySelector(".card__template").content;

export default class Card {
  constructor(link, name, handleClickImage, cardSelector) {
    (this._link = link), (this._name = name);
    this.handleClickImage = handleClickImage;
    this.cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this.cardSelector);
    constent.querySelector("card");
    cloneNode(true);
    return cardTemplate;
  }

  setEventListeners() {
    this._handlerImageClick();
    this._handlerLikeClick();
    this._handlerDeleteClick();

    this.handlerLikeClick.addEventListener("click", () => {
      this.toggleLike();
    });
    this._handlerDeleteClick.addEventListener("click", () => {
      this.removeCard();
    });
    this.handlerImageClick.addEventListener("click", () => {
      this.handleClickImage(this._link, this._name);
    });
  }

  toggleLike() {
    this.cardLikeButton.classList.toggle("card__like_active");
  }

  removeCard() {
    this._element.remove();
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

  getCard() {
    this.setProperties();
    this.setEventListeners();
    return this.htmlCard;
  }
}
