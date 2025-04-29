import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this.popupElement.querySelector("form");
    //this._submitButton = this._form.querySelector(".form__submit");
  }

  openPopup(cardElement, cardId) {
    this._cardElement = cardElement;
    this._cardId = cardId;
    super.openPopup();
  }

  setHandleConfirmDelete(handleDelete) {
    this._handleConfirmDelete = handleDelete; // Guarda el callback para confirmar la eliminación
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (this._handleConfirmDelete) {
        this._handleConfirmDelete(this._cardElement, this._cardId); // Llama al callback con la tarjeta y el ID
      }
      this.closePopup();
    });
  }
}
