import { initialCards } from './cards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button_action_save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// Попап редактирования профиля
const popupProfileEdit = document.querySelector('.popup_type_edit-profile');
const editProfileButton = document.querySelector('.profile__button_action_edit');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');
// Его форма и импуты
const formEditProfile = document.forms.editProfile;
const nameInput = formEditProfile.elements.name;
const workInput = formEditProfile.work;
// Попап добавления карточек
const popupAddCard = document.querySelector('.popup_type_add-card');
const addCardButton = document.querySelector('.profile__button_action_add');
// Его форма и импуты
const formAddCard = document.forms.addCard;
const placeInput = formAddCard.name;
const linkInput = formAddCard.link;
// Попап изображения
export const popupPhotoView = document.querySelector('.popup_type_photo-view');
// Родительский блок для карточек
const cardsList = document.querySelector('.cards__list');

// Открываем попап
export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', keyEscapeHandler); // Добавляем обработчик на Esc
}

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
  const card = new Card(placeInput.value, linkInput.value, '#card-template');
  const cardElement = card.generateCard();

  evt.preventDefault();
  renderCard((cardElement), true); // Добавляем карточку в начало
  closePopup(popupAddCard);
  formAddCard.reset();
}

// Закрываем попап
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyEscapeHandler); // Удаляем обработчик на Esc
}

// Закрываем открытый попап клавишей Esc
function keyEscapeHandler(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
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

formEditProfile.addEventListener('submit', editSubmitHandler);
formAddCard.addEventListener('submit', addCardHandler);

editProfileButton.addEventListener('click', openPopupProfile);
addCardButton.addEventListener('click', openPopupAdd);

popupProfileEdit.addEventListener('click', clickCloseHandler);
popupAddCard.addEventListener('click', clickCloseHandler);
popupPhotoView.addEventListener('click', clickCloseHandler);


initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, '#card-template');
  const cardElement = card.generateCard();

  renderCard(cardElement);
});

// Создаем экземпляр класса FormValidator для формы редактирования профиля:
const formValidatorEditProfile = new FormValidator(config, formEditProfile);
formValidatorEditProfile.enableValidation();

// Создаем экземпляр класса FormValidator для формы добавления карточки:
const formValidatorAddCard = new FormValidator(config, formAddCard);
formValidatorAddCard.enableValidation();
