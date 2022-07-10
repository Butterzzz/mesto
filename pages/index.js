import { popupProfileEdit, editProfileButton, profileName, profileWork, formEditProfile,
  nameInput, workInput, popupAddCard, addCardButton, formAddCard, popupPhotoView,
  cardsList, initialCards, config } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';


// Создаем экземпляр класса FormValidator для формы редактирования профиля:
const formValidatorEditProfile = new FormValidator(config, formEditProfile);
formValidatorEditProfile.enableValidation();

// Создаем экземпляр класса FormValidator для формы добавления карточки:
const formValidatorAddCard = new FormValidator(config, formAddCard);
formValidatorAddCard.enableValidation();

// Функция создания новой карточки
function createCard(cardItem) {
  const card = new Card(cardItem.name, cardItem.link, '#card-template', () => {
    popupWithImage.open(cardItem.name, cardItem.link);
  });
  const cardElement = card.generateCard();

  return cardElement;
}

// Создаем экземпляр класса Section рендера массива карточек:
const defaultCardList = new Section({
  data: initialCards,
  renderer: (cardItem) => {
    defaultCardList.setItem(createCard(cardItem));
    }
  }, cardsList);

defaultCardList.renderItems();

// Создаем экземпляр класса PopupWithImage:
const popupWithImage = new PopupWithImage(popupPhotoView);
popupWithImage.setEventListeners();

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
const popupCard = new PopupWithForm(popupAddCard, (cardItem) => {
  defaultCardList.setItem(createCard(cardItem), true); // Добавляем карточку в начало
});

popupCard.setEventListeners();

// Открываем попап добавления карточки кликом на соответсвующую кнопку
addCardButton.addEventListener('click', () => {
  popupCard.open();
  formValidatorAddCard.cleanUpErrors(); // Сбрасываем ошибки формы добавления карточки
});
