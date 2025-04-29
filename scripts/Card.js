export default class Card {
  constructor(
    data,
    cardSelector,
    handleClickImage,
    handleDeletePopup,
    handleAddLike,
    handleRemoveLike,
    userId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._ownerId = data.owner._id; // ID del propietario de la tarjeta
    this._userId = userId; // ID del usuario actual
    this._cardSelector = cardSelector;
    this._handleClickImage = handleClickImage;
    this._handleDeletePopup = handleDeletePopup;
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
    if (this._ownerId !== this._userId) {
      this._deleteButton.remove(); // Elimina el botón si no pertenece al usuario actual
    }
    this._likeButton = this._element.querySelector(".card__like");
    this._imageCard = this._element.querySelector(".card__image");

    // Evento para abrir el popup de confirmación de eliminación
    if (this._deleteButton) {
      this._deleteButton.addEventListener("click", () => {
        this._handleDeletePopup(this._element, this._id); // Pasa el elemento y el ID al popup
      });
    }

    if (this._isLiked) {
      this._likeButton.classList.add("card__like_active");
    }
    // Evento para manejar el like
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    // Evento para abrir el popup de imagen
    this._imageCard.addEventListener("click", () => {
      this._handleClickImage(this._link, this._name);
    });
  }

  // Evento para abrir el popup de eliminar tarjeta
  _handleDeleteCard() {
    this._deleteButton.addEventListener("click", () => {
      this._handleDeletePopup(this._element, this._id); // Pasa el elemento y el ID al popup
    });
  }

  _handleLikeClick() {
    if (this._isLiked) {
      this._handleRemoveLike(this._id).then(() => {
        this._likeButton.classList.remove("card__like_active");
        this._isLiked = false;
      });
    } else {
      this._handleAddLike(this._id).then(() => {
        this._likeButton.classList.add("card__like_active");
        this._isLiked = true;
      });
    }
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
