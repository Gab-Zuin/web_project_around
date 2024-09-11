const profileButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const inputName = document.querySelector("#input_name");
const inputAbout = document.querySelector("#input_about");
const inputSubmit = document.querySelector(".form__submit");
const formProfile = document.querySelector("#form__profile");

profileButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

popupClose.removeEventListener("click", function () {
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
