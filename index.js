// Declaración de variables
const profileButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup-edit-profile");
const popupClose = document.querySelector(".popup__close");
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
const popupCloseCard = formAddCard.querySelector(".popup__close");
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

// Funciones de manejo de popups
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc); // Agrega el event listener aquí
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc); // Remueve el event listener aquí
}

// Cierre en Escape
const closeOnEsc = (evt) => {
  if (evt.key === "Escape") {
    closePopup(popupProfile);
    closePopup(popupForm);
    closePopup(popupImage);
  }
};

// Manejo específico de popups
function openPopupImage(link, title) {
  popupImagePhoto.src = link;
  popupImageTitle.textContent = title;
  openPopup(popupImage);
}

// Funciones relacionadas con las tarjetas
function cardCreate(card) {
  const newCard = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  const cardName = newCard.querySelector(".card__place");
  cardImage.src = card.link;
  cardName.textContent = card.name;
  container.prepend(newCard);

  // Evento para ampliar imagen
  cardImage.addEventListener("click", () =>
    openPopupImage(card.link, card.name)
  );

  // Evento para el botón de like
  const likeButton = newCard.querySelector(".card__like");
  likeButton.addEventListener("click", () =>
    likeButton.classList.toggle("card__like_active")
  );

  // Evento para el botón de borrar
  const trashButton = newCard.querySelector(".card__trash");
  trashButton.addEventListener("click", () => newCard.remove());
}

// Creación de las tarjetas iniciales
initialCards.forEach((card) => cardCreate(card));

// Eventos de apertura y cierre de popups
profileButton.addEventListener("click", () => openPopup(popupProfile));
popupClose.addEventListener("click", () => closePopup(popupProfile));

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputAbout.value;
  closePopup(popupProfile);
});

addButton.addEventListener("click", () => openPopup(popupForm));
popupCloseCard.addEventListener("click", () => closePopup(popupForm));

formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  cardCreate({ name: formTitle.value, link: formLink.value });
  closePopup(popupForm);
});

closePopupImage.addEventListener("click", () => closePopup(popupImage));

document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(popupProfile);
    closePopup(popupForm);
    closePopup(popupImage);
  }
});
