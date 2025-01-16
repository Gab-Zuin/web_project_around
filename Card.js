export default class Card {
  constructor(link, name) {
    (this._link = link), (this._name = name);
  }
  getTemplate() {
    return cardTemplate.querySelector(".card").cloneNode(true);
  }

  toggleLike() {
    this.cardLikeButton.classList.toggle("card__like_active");
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
    this.cardTitle.textContent = this.name;
    this.cardImage.src = this.link;
  }

  setCard() {
    this.setProperties();
    this.setEventListeners();
    return this.htmlCard;
  }
}
