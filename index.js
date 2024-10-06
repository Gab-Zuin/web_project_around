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
    name: "El Nido, Palawan, Philippines",
    link: "https://images.unsplash.com/photo-1728042743634-9e7189add952?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Seceda, South Tyrol, Italy",
    link: "https://images.unsplash.com/photo-1683899266164-219e1ebdf029?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Vik, Iceland",
    link: "https://images.unsplash.com/photo-1723058852872-0e7ecaf4055d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lago di Braies, Prags, Italy",
    link: "https://images.unsplash.com/photo-1727713144442-69f31f0510ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lower Antelope Canyon, Page, United States",
    link: "https://images.unsplash.com/photo-1479030160180-b1860951d696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Wānaka, New Zealand",
    link: "https://images.unsplash.com/photo-1721020401359-d6e4f75c5a81?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

//Apertura Popup Boton de Editar
profileButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

//Cierre cuando se llena Popup Boton de Editar
function closePopup() {
  popupProfile.classList.remove("popup_opened");
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
}

function closeImagePopup() {
  popupImage.classList.remove("popup_opened");
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

  const likeButton = newCard.querySelector(".card__like");
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
}
//Cierre
function closePopupCard() {
  popupForm.classList.remove("popup_opened");
}

addButton.addEventListener("click", openPopupCard);

//Envio

formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  cardCreate({ name: formTitle.value, link: formLink.value });
  closePopupCard();
});

popupCloseCard.addEventListener("click", closePopupCard);
