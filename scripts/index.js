import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup, validationsSettings } from "./utils.js";

// Declaración de variables
const profileButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup-edit-profile");
const popupCloseProfile = popupProfile.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const inputName = document.querySelector("#input_name");
const inputAbout = document.querySelector("#input_about");
const inputSubmit = document.querySelector(".form__submit");
const formProfile = document.querySelector("#form__profile");
const cardTemplate = document.querySelector(".card__template").content;
const container = document.querySelector(".container");
const addButton = document.querySelector(".profile__add-button");
const popupForm = document.querySelector("#popup-add-card");
const formTitle = document.querySelector("#input_title");
const formLink = document.querySelector("#input_link");
const formAddCard = document.querySelector("#popup-form-card");
const popupCloseCard = popupForm.querySelector(".popup__close");
const popupImage = document.querySelector("#popup-image");
const closePopupImage = popupImage.querySelector(".popup__close");
const popupImagePhoto = popupImage.querySelector(".popup__image_expand");
const popupImageTitle = popupImage.querySelector(".popup__image_title");

const initialCards = [
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

// Funciones relacionadas con las tarjetas
function cardCreate(card) {
  const newCard = new Card(card, ".card__template", (link, name) => {
    openPopupImage(link, name);
  }).getView();
  container.prepend(newCard);
}

// Creación de las tarjetas iniciales
initialCards.forEach((card) => cardCreate(card));

// Manejo específico de popups
function openPopupImage(link, title) {
  popupImagePhoto.src = link;
  popupImageTitle.textContent = title;
  openPopup(popupImage);
}

// Eventos de apertura y cierre de popups Profile
profileButton.addEventListener("click", () => openPopup(popupProfile));
popupCloseProfile.addEventListener("click", () => closePopup(popupProfile));

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputAbout.value;
  closePopup(popupProfile);
});

// Eventos de apertura y cierre de popups Card
addButton.addEventListener("click", () => openPopup(popupForm));
popupCloseCard.addEventListener("click", () => closePopup(popupForm));

formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  cardCreate({ name: formTitle.value, link: formLink.value });
  closePopup(popupForm);
});

// Eventos de apertura y cierre de popups Image
closePopupImage.addEventListener("click", () => closePopup(popupImage));

document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(popupProfile);
    closePopup(popupForm);
    closePopup(popupImage);
  }
});

// Validación de formularios
const profileFormValidator = new FormValidator(
  validationsSettings,
  formProfile
);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationsSettings, formAddCard);
cardFormValidator.enableValidation();
