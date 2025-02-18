//Responsables de selectores y cosas fijas

export const popupImage = document.querySelector("#popup-image");
const popupForm = document.querySelector("#popup-add-card");
const popupProfile = document.querySelector("#popup-edit-profile");
export const popupClose = document.querySelector(".popup__close");
const closePopupImage = popupImage.querySelector(".popup__close");
const addButton = document.querySelector(".profile__add-button");
export const formAddCard = document.querySelector("#popup-form-card");
const popupCloseCard = formAddCard.querySelector(".popup__close");
const popupImagePhoto = popupImage.querySelector(".popup__image_expand");
const popupImageTitle = popupImage.querySelector(".popup__image_title");

//Apertura Popup Boton de Editar
export function openPopupProfile() {
  popupProfile.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
}

//Cierre Popup Boton de Editar
export function closePopup() {
  popupProfile.classList.remove("popup_opened");
}

//Open Popup Image Expandida
export function openPopupImage(link, title) {
  popupImage.classList.add("popup_opened");
  popupImagePhoto.src = link;
  popupImageTitle.textContent = title;
  document.addEventListener("keydown", closeOnEsc);
}
//Cierre Popup  Imagen Expandida
export function closeImagePopup() {
  popupImage.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
}
closePopupImage.addEventListener("click", closeImagePopup);

//Apertura card
function openPopupCard() {
  popupForm.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
}
//Cierre card
export function closePopupCard() {
  popupForm.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
}

function closeOnEsc(evt) {
  if (evt.key === "Escape") {
    closePopup();
    closeImagePopup();
    closePopupCard();
  }
}
