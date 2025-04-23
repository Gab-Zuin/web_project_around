export default class Card {
  constructor(
    data,
    cardSelector,
    handleClickImage,
    handleDeleteCard,
    handleAddLike,
    handleRemoveLike
  ) {
    /*const (name, link, isLiked) = data;*/
    this._name = data.name;
    this._link = data.link;
    this._isLiked = data.isLiked;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleClickImage = handleClickImage;
    this._handleDeleteCard = handleDeleteCard;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    this._deleteButton = this._element.querySelector(".card__trash");
    this._likeButton = this._element.querySelector(".card__like");
    this._imageCard = this._element.querySelector(".card__image");

    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteCard()
    );
    this._likeButton.addEventListener("click", () => this._handleLikeClick());
    this._imageCard.addEventListener("click", () =>
      this._handleClickImage(this._link, this._name)
    );
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeClick() {
    //this._likeButton.classList.toggle("card__like_active");
    if (this._isLiked) {
      console.log("Se debe llamar a quitar like");
      this._handleRemoveLike(this._id).then((card) => {
        this._likeButton.classList.remove("card__like_active");
        this._isLiked = false;
      });
    } else {
      console.log("Se debe llamar a poner dislike");
    }
    this._isLiked = !this._isLiked;
  }

  getView() {
    this._element = this._getTemplate();
    this._imageCard = this._element.querySelector(".card__image");
    this._titleCard = this._element.querySelector(".card__place");
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._titleCard.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}
