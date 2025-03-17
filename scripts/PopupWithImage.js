import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector(".popup__image_expand");
    this._popupTitle = this._popupElement.querySelector(".popup__image_title");
  }
  open(name, link) {
    super.open();
    this.popupImage.src = link;
    this.popupTitle.textContent = title;
  }
}
