import { popupProfileEdit, editProfileButton, profileName, profileWork, formEditProfile, nameInput, workInput, popupAddCard, addCardButton, formAddCard, placeInput, linkInput, popupPhotoView, cardsList, initialCards, config } from '../utils/constants.js';
import { openPopup, closePopup } from '../utils/utils.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
// import FormValidator from '../components/Section.js';
// import FormValidator from '../components/Popup.js';
// import FormValidator from '../components/PopupWithImage.js';
// import FormValidator from '../components/PopupWithForm.js';
// import FormValidator from '../components/UserInfo.js';

// Открываем попап редактирования профиля
function openPopupProfile() {
  openPopup(popupProfileEdit);
  nameInput.value = profileName.textContent;
  workInput.value = profileWork.textContent;
  formValidatorEditProfile.cleanUpErrors(); //Сбрасываем ошибки формы редактирования профиля
}

// Настройка редактирования профиля
function editSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWork.textContent = workInput.value;
  closePopup(popupProfileEdit);
}

// Открываем попап добавления карточки
function openPopupAdd() {
  openPopup(popupAddCard);
  formAddCard.reset()
  formValidatorAddCard.cleanUpErrors(); // Сбрасываем ошибки формы добавления карточки
}

// Настройка добавления карточки
function addCardHandler (evt) {
  const cardItem = { name: placeInput.value, link: linkInput.value }

  evt.preventDefault();
  renderCard(createCard(cardItem), true); // Добавляем карточку в начало
  closePopup(popupAddCard);
  formAddCard.reset();
}

// Закрываем попап кликом на оверлей
function clickCloseHandler(evt) {
  const target = evt.target;

  if(target.classList.contains('popup__button_action_close') || target.classList.contains('popup_opened')) {
    closePopup(evt.currentTarget);
  };
}

function renderCard(cardElement, isPrepend = false) {
  if(isPrepend) {
    cardsList.prepend(cardElement);
  } else {
    cardsList.append(cardElement);
  }
}

function createCard(cardItem) {
  const card = new Card(cardItem.name, cardItem.link, '#card-template');
  const cardElement = card.generateCard();

  return cardElement;
}

initialCards.forEach((cardItem) => {
  renderCard(createCard(cardItem));
});

formEditProfile.addEventListener('submit', editSubmitHandler);
formAddCard.addEventListener('submit', addCardHandler);

editProfileButton.addEventListener('click', openPopupProfile);
addCardButton.addEventListener('click', openPopupAdd);

popupProfileEdit.addEventListener('click', clickCloseHandler);
popupAddCard.addEventListener('click', clickCloseHandler);
popupPhotoView.addEventListener('click', clickCloseHandler);

// Создаем экземпляр класса FormValidator для формы редактирования профиля:
const formValidatorEditProfile = new FormValidator(config, formEditProfile);
formValidatorEditProfile.enableValidation();

// Создаем экземпляр класса FormValidator для формы добавления карточки:
const formValidatorAddCard = new FormValidator(config, formAddCard);
formValidatorAddCard.enableValidation();
