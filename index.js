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

//Apertura Popup Boton de Editar
profileButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
});

//Cierre cuando se llena Popup Boton de Editar
function closePopup() {
  popupProfile.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
}
//Cierre Popup Boton de Editar
popupClose.addEventListener("click", function () {
  closePopup();
});
//Llenado Popup Boton de Editar
formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputAbout.value;
  closePopup();
});

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

//Creacion de Carta (Accion de Likea carta)(Accion de eliminar carta)(Despliague de Popup Imagen ampliada)
function cardCreate(card) {
  const newCard = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  const cardName = newCard.querySelector(".card__place");
  cardImage.src = card.link;
  cardName.textContent = card.name;
  container.prepend(newCard);
  cardImage.addEventListener("click", function () {
    openPopupImage(card.link, card.name); /*Apertura de Imagen Expandida*/
  });

  const likeButton = newCard.querySelector(".card__like"); // aqui se cambia a this.... y despues se empieza a importar
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like_active");
  });
  const trashButton = newCard.querySelector(".card__trash");
  trashButton.addEventListener("click", function () {
    newCard.remove();
  });
}

initialCards.forEach((card) => {
  cardCreate(card);
});

//2. Formulario para añadir una tarjeta.

//Apertura
function openPopupCard() {
  popupForm.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
}
//Cierre
function closePopupCard() {
  popupForm.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
}

addButton.addEventListener("click", openPopupCard);

//Envio

formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  cardCreate({ name: formTitle.value, link: formLink.value });
  closePopupCard();
});

popupCloseCard.addEventListener("click", closePopupCard);

const closeOnEsc = (evt) => {
  if (evt.key === "Escape") {
    closePopup();
    closePopupCard();
    closeImagePopup();
  }
};

document.addEventListener("click", function (evt) {
  if (
    evt.target.classList.contains("popup") &&
    evt.target.classList.contains("popup_opened")
  ) {
    closePopup(evt.target);
  }
});
