import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  openPopup,
  closePopup,
  validationsSettings,
  profileButton,
  popupProfile,
  popupCloseProfile,
  profileName,
  profileProfession,
  inputName,
  inputAbout,
  inputSubmit,
  formProfile,
  cardTemplate,
  container,
  addButton,
  popupForm,
  formTitle,
  formLink,
  formAddCard,
  popupCloseCard,
  popupImage,
  closePopupImage,
  popupImagePhoto,
  popupImageTitle,
  initialCards,
} from "./utils.js";

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
