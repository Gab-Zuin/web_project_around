const cardTemplate = document.querySelector(".card__template").content;

export default class Card {
  constructor(link, name, handleClickImage, cardSelector) {
    (this._link = link), (this._name = name);
    this.handleClickImage = handleClickImage;
    this.cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this.cardSelector).content;
    console.log(cardTemplate);
    cardTemplate.querySelector(".card").cloneNode(true);
    return cardTemplate;
  }

  setEventListeners() {
    this._handlerLikeClick.addEventListener("click", () => {
      this.toggleLike();
    });
    this._handlerDeleteClick.addEventListener("click", () => {
      this.removeCard();
    });
    this._handlerImageClick.addEventListener("click", () => {
      this.handleClickImage(this._link, this._name);
    });
  }

  toggleLike() {
    this.cardLikeButton.classList.toggle("card__like_active");
  }

  removeCard() {
    this._element.remove();
  }

  /*getVier() {
    this._element = this._getTemplate();
    this._handlerImageClick = this._element.querySelector(".card__image");
    this._handlerLikeClick = this._element.querySelector(".card__like");
    this._handlerDeleteClick = this._element.querySelector(".card__trash");
    this._element.querySelector(".card__place").textContent = this._name;
    this.handlerImageClick.src = this._link;
    this.handlerImageClick.alt = this._name;
    this.setEventListeners();
    return this._element;
  }*/

  setProperties() {
    this._htmlCard = this._getTemplate();
    console.log(this._htmlCard);
    this._cardImage = this._htmlCard.querySelector(".card__image");
    this._cardTitle = this._htmlCard.querySelector(".card__place");
    this._cardLikeButton = this._htmlCard.querySelector(".card__like");
    this._cardTrashButton = this._htmlCard.querySelector(".card__trash");
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
  }

  getCard() {
    this.setProperties();
    this.setEventListeners();
    return this.htmlCard;
  }
}
