import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  validationsSettings,
  profileButton,
  profileName,
  profileProfession,
  formProfile,
  container,
  addButton,
  formAddCard,
} from "./utils.js";
import { api } from "./Api.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

// Funciones relacionadas con las tarjetas
function cardCreate(card) {
  const newCard = new Card(card, ".card__template", (link, name) => {
    popupImage.openPopup(link, name);
  }).getView();
  container.prepend(newCard);
}
/* api.getUserInfo().then((response) => {
  console.log(response);
}); */

// Creación de las tarjetas iniciales
/* initialCards.forEach((card) => cardCreate(card)); */
/* api.getInitialCards().then((respose) => {
  response
    .reverse()
    .forEach((data) => {
      //No se que colocar aqui
    })
    .catch(() => {});
}); */
api
  .getInitialCards()
  .then((response) => {
    // Asegúrate de que la respuesta sea un array de objetos con `name` y `link`
    /*
    response.reverse().forEach((data) => {
      const card = new Card(data, ".card__template", (link, name) =>
        openPopupImage(link, name)
      );
      const cardElement = card.getView();
      container.prepend(cardElement);
    });*/
    const section = new Section(
      {
        items: response,
        renderer: (item) => {
          const card = new Card(
            item,
            ".card__template",
            (link, name) => {
              popupImage.openPopup(link, name);
            },
            (cardId) => {},
            (cardId) => {
              return api.addLike(cardId);
            },
            (cardId) => {
              return api.removeLike(cardId);
            }
          );
          const cardElement = card.getView();
          section.addItem(cardElement);
        },
      },
      ".container"
    );
    section.render();
  })
  .catch((err) => {
    console.error(`Error al obtener las tarjetas iniciales: ${err}`);
  });
/*
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
*/

// Validación de formularios
const profileFormValidator = new FormValidator(
  validationsSettings,
  formProfile
);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationsSettings, formAddCard);
cardFormValidator.enableValidation();

const popupProfile = new PopupWithForm("#popup-edit-profile");
popupProfile.setEventListeners(({ name, about }) => {
  api
    .updateUserInfo({ name, about })
    .then((res) => {
      profileName.textContent = res.name;
      profileProfession.textContent = res.about;
    })
    .catch((err) => {
      console.error(`Error al actualizar el perfil: ${err}`);
    });
});

const popupCard = new PopupWithForm("#popup-add-card");
popupCard.setEventListeners(({ title, link }) => {
  api
    .createCard({ name: title, link })
    .then((res) => {
      cardCreate(res);
    })
    .catch((err) => {
      console.error(`Error al agregar la tarjeta: ${err}`);
    });
});

// Eventos de apertura y cierre de popups Profile
profileButton.addEventListener("click", () => popupProfile.openPopup());
addButton.addEventListener("click", () => popupCard.openPopup());

const popupImage = new PopupWithImage("#popup-image");
popupImage.setEventListeners();
