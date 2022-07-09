import { popupProfileEdit, editProfileButton, profileName, profileWork, formEditProfile, nameInput, workInput, popupAddCard, addCardButton, formAddCard, placeInput, linkInput, popupPhotoView, cardsList, initialCards, config } from '../utils/constants.js';
// import { openPopup, closePopup } from '../utils/utils.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
// import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// // Открываем попап редактирования профиля
// function openPopupProfile() {
//   openPopup(popupProfileEdit);
//   nameInput.value = profileName.textContent;
//   workInput.value = profileWork.textContent;
//   formValidatorEditProfile.cleanUpErrors(); //Сбрасываем ошибки формы редактирования профиля
// }

// // Настройка редактирования профиля
// function editSubmitHandler (evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileWork.textContent = workInput.value;
//   closePopup(popupProfileEdit);
// }

// // Открываем попап добавления карточки
// function openPopupAdd() {
//   openPopup(popupAddCard);
//   formAddCard.reset()
//   formValidatorAddCard.cleanUpErrors(); // Сбрасываем ошибки формы добавления карточки
// }

// // Настройка добавления карточки
// function addCardHandler (evt) {
//   const cardItem = { name: placeInput.value, link: linkInput.value }

//   evt.preventDefault();
//   // renderCard(createCard(cardItem), true); // Добавляем карточку в начало
//   defaultCardList.setItem(cardItem);
//   closePopup(popupAddCard);
//   formAddCard.reset();
// }

// // Закрываем попап кликом на оверлей
// function clickCloseHandler(evt) {
//   const target = evt.target;

//   if(target.classList.contains('popup__button_action_close') || target.classList.contains('popup_opened')) {
//     closePopup(evt.currentTarget);
//   };
// }

// function renderCard(cardElement, isPrepend = false) {
//   if(isPrepend) {
//     cardsList.prepend(cardElement);
//   } else {
//     cardsList.append(cardElement);
//   }
// }

// function createCard(cardItem) {
//   const card = new Card(cardItem.name, cardItem.link, '#card-template');
//   const cardElement = card.generateCard();

//   return cardElement;
// }

// initialCards.forEach((cardItem) => {
//   renderCard(createCard(cardItem));
// });

// formEditProfile.addEventListener('submit', editSubmitHandler);
// formAddCard.addEventListener('submit', addCardHandler);

// editProfileButton.addEventListener('click', openPopupProfile);
// addCardButton.addEventListener('click', openPopupAdd);

// popupProfileEdit.addEventListener('click', clickCloseHandler);
// popupAddCard.addEventListener('click', clickCloseHandler);
// popupPhotoView.addEventListener('click', clickCloseHandler);

// Создаем экземпляр класса FormValidator для формы редактирования профиля:
const formValidatorEditProfile = new FormValidator(config, formEditProfile);
formValidatorEditProfile.enableValidation();

// Создаем экземпляр класса FormValidator для формы добавления карточки:
const formValidatorAddCard = new FormValidator(config, formAddCard);
formValidatorAddCard.enableValidation();

// Создаем экземпляр класса Section рендера массива карточек:
const defaultCardList = new Section({
  data: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem.name, cardItem.link, '#card-template', handleCardClick);
    const cardElement = card.generateCard();

    defaultCardList.setItem(cardElement);
    }
  }, cardsList);

defaultCardList.renderItems();

// Создаем экземпляр класса PopupWithImage:
const popupWithImage = new PopupWithImage(popupPhotoView);
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// Создаем экземпляр класса UserInfo для попапа редактирования профиля:
const userInfo = new UserInfo({
  nameSelector: profileName,
  workSelector: profileWork
});

// Создаем экземпляр класса PopupWithForm для попапа редактирования профиля:
const popupProfile = new PopupWithForm(popupProfileEdit, (formData) => {
  const { name, work } = formData;

  userInfo.setUserInfo(name, work); // Используем метод, который принимает новые данные пользователя и добавляет их на страницу
});

popupProfile.setEventListeners();

// Открываем попап редактирования профиля кликом на соответсвующую кнопку
editProfileButton.addEventListener('click', () => {
  popupProfile.open();

  const { name, work } = userInfo.getUserInfo(); // Используем метод, который возвращает объект с данными пользователя

  nameInput.value = name;
  workInput.value = work;

  formValidatorEditProfile.cleanUpErrors(); // Сбрасываем ошибки формы добавления карточки
});

// Создаем экземпляр класса PopupWithForm для попапа добавления карточки:
const popupCard = new PopupWithForm(popupAddCard, (cardData) => {

  const card = new Card(cardData.name, cardData.link, '#card-template', handleCardClick);
  const cardElement = card.generateCard();

  defaultCardList.setItem((cardElement), true); // Добавляем карточку в начало
});

popupCard.setEventListeners();


// Открываем попап добавления карточки кликом на соответсвующую кнопку
addCardButton.addEventListener('click', () => {
  popupCard.open();
  formValidatorAddCard.cleanUpErrors(); // Сбрасываем ошибки формы добавления карточки
});
