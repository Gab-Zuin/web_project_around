//utils.js contendrá los controladores de eventos y la función que abre/cierra las ventanas modales.
/* Modularidad: Mover los addEventListener a utils.js hace que tu código sea más modular y organizado. Puedes mantener la lógica de eventos separada de la lógica de creación de elementos y manejo de datos.
Reutilización: Al tener los addEventListener en un archivo separado, puedes reutilizarlos en diferentes partes de tu aplicación sin duplicar código.
Mantenimiento: Facilita el mantenimiento del código, ya que puedes encontrar y actualizar la lógica de eventos en un solo lugar. */

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
