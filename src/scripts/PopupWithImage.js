import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this.popupElement.querySelector(".popup__image_expand");
    this._popupTitle = this.popupElement.querySelector(".popup__image_title");
  }
  openPopup(link, name) {
    super.openPopup();
    this._popupImage.src = link;
    this._popupTitle.textContent = name;
  }
}
