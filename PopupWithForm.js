import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector(".popup__image_expand");
    this._popupTitle = this._popupElement.querySelector(".popup__image_title");
  }

  _getInputValues() {}

  setEventListeners() {}

  open() {}
}
