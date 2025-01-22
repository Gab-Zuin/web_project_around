/*Index.js se debe encargar de los eventos y la cracion de los elementos con las clases*/

export const popupImage = document.querySelector("#popup-image");
const popupForm = document.querySelector("#popup-add-card");
const popupProfile = document.querySelector("#popup-edit-profile");
export const popupClose = document.querySelector(".popup__close");
const closePopupImage = popupImage.querySelector(".popup__close");
const addButton = document.querySelector(".profile__add-button");
export const formAddCard = document.querySelector("#popup-form-card");
const popupCloseCard = formAddCard.querySelector(".popup__close");

//Apertura Popup Boton de Editar
export function openPopupProfile() {
  popupProfile.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
}

//Cierre cuando se llena Popup Boton de Editar
function closePopupProfile() {
  popupProfile.classList.remove("popup_opened");
  //document.removeEventListener("keydown", closeOnEsc); Revisar si va o no
}

//Open Popup Image Expandida
function openPopupImage(link, title) {
  popupImage.classList.add("popup_opened");
  popupImagePhoto.src = link;
  popupImageTitle.textContent = title;
  document.addEventListener("keydown", closeOnEsc);
}
//Cierre de Imagen Expandida
function closeImagePopup() {
  popupImage.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
}
closePopupImage.addEventListener("click", closeImagePopup);

//Apertura a
function openPopupCard() {
  popupForm.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
}
//Cierre a
function closePopupCard() {
  popupForm.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
}

addButton.addEventListener("click", openPopupCard); //este va en index.js

popupCloseCard.addEventListener("click", closePopupCard);
