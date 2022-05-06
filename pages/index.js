const openButton = document.querySelector('.profile__button_action_edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.form__button_action_close');
const togglePopup = function (event) {
  popup.classList.toggle("popup_opened");
}

openButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup);

popup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget)
      togglePopup();
})

document.addEventListener('keyup', (ev) => {
  if (ev.key === "Escape" && popup.classList.contains("popup_opened")) {
      togglePopup();
  }
})

