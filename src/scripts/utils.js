//utils.js contendrá los controladores de eventos y la función que abre/cierra las ventanas modales.
/* Modularidad: Mover los addEventListener a utils.js hace que tu código sea más modular y organizado. Puedes mantener la lógica de eventos separada de la lógica de creación de elementos y manejo de datos.
Reutilización: Al tener los addEventListener en un archivo separado, puedes reutilizarlos en diferentes partes de tu aplicación sin duplicar código.
Mantenimiento: Facilita el mantenimiento del código, ya que puedes encontrar y actualizar la lógica de eventos en un solo lugar. */

// Declaración de variables
export const profileButton = document.querySelector(".profile__edit-button");
export const popupProfile = document.querySelector("#popup-edit-profile");
export const popupCloseProfile = popupProfile.querySelector(".popup__close");
export const profileName = document.querySelector(".profile__name");
export const profileProfession = document.querySelector(".profile__profession");
export const inputName = document.querySelector("#input_name");
export const inputAbout = document.querySelector("#input_about");
export const inputSubmit = document.querySelector(".form__submit");
export const formProfile = document.querySelector("#form__profile");
export const cardTemplate = document.querySelector(".card__template").content;
export const container = document.querySelector(".container");
export const addButton = document.querySelector(".profile__add-button");
export const popupForm = document.querySelector("#popup-add-card");
export const formTitle = document.querySelector("#input_title");
export const formLink = document.querySelector("#input_link");
export const formAddCard = document.querySelector("#popup-form-card");
export const popupCloseCard = popupForm.querySelector(".popup__close");
export const popupImage = document.querySelector("#popup-image");
export const closePopupImage = popupImage.querySelector(".popup__close");
export const popupImagePhoto = popupImage.querySelector(".popup__image_expand");
export const popupImageTitle = popupImage.querySelector(".popup__image_title");

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export const validationsSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "input_name-error",
};

export function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
}

export function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
}

export function closeOnEsc(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    if (openPopup) {
      closePopup(openPopup);
    }
  }
}
