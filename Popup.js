export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
    this.closePopupButton = this.popupElement.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  openPopup() {
    this.popupElement.classList.add("popup_opened");
    this.document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this.popupElement.classList.remove("popup_opened");
    this.document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  handleClickOutside(evt) {
    return evt.target.classList.contains("popup_opened");
  }

  setEventListeners() {
    this.closePopupButton.addEventListener("click", () => {
      this.closePopup();
    });

    this.popupElement.addEventListener("click", (evt) => {
      if (this.handleClickOutside(evt)) {
        this.closePopup();
      }
    });
  }
}
