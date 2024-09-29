const profileButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const inputName = document.querySelector("#input_name");
const inputAbout = document.querySelector("#input_about");
const inputSubmit = document.querySelector(".form__submit");
const formProfile = document.querySelector("#form__profile");
const cardTemplate = document.querySelector("#card-template");
const cardContainer = document.querySelector(".container");
//const card = document.querySelector(".card");
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

profileButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

popupClose.addEventListener("click", function () {
  closePopup();
});

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputAbout.value;
  closePopup();
});

function closePopup() {
  popupProfile.classList.remove("popup_opened");
}

function createCard() {
  const cardClone = cardTemplate.querySelector(".card").cloneNode(true);
  cardContainer = append(cardClone);
}
