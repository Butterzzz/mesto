import './index.css';
import {
  popupProfileEdit, editProfileButton, profileName, profileAbout, profileAvatar, formEditProfile,
  nameInput, aboutInput, popupAddCard, addCardButton, formAddCard, popupPhotoView,
  popupAvatarEdit, editAvatarButton, formEditAvatar, popupConfirmDelete, cardsList, config
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '47e90631-cd63-40cb-8d27-e2882de3dcef',
    'Content-Type': 'application/json'
  }
});

// Создаем экземпляр класса FormValidator для формы редактирования профиля:
const formValidatorEditProfile = new FormValidator(config, formEditProfile);
formValidatorEditProfile.enableValidation();

// Создаем экземпляр класса FormValidator для формы редактирования аватара:
const formValidatorEditAvatar = new FormValidator(config, formEditAvatar);
formValidatorEditAvatar.enableValidation();

// Создаем экземпляр класса FormValidator для формы добавления карточки:
const formValidatorAddCard = new FormValidator(config, formAddCard);
formValidatorAddCard.enableValidation();

// Создаем экземпляр класса PopupWithImage:
const popupWithImage = new PopupWithImage(popupPhotoView);
popupWithImage.setEventListeners();

// Открываем попап редактирования профиля кликом на соответсвующую кнопку
editProfileButton.addEventListener('click', () => {
  popupProfile.open();

  const { name, about } = userInfo.getUserInfo(); // Используем метод, который возвращает объект с данными пользователя

  nameInput.value = name;
  aboutInput.value = about;

  formValidatorEditProfile.cleanUpErrors(); // Сбрасываем ошибки формы редактирования профиля
});

// Открываем попап добавления карточки кликом на соответсвующую кнопку
addCardButton.addEventListener('click', () => {
  popupCard.open();
  formValidatorAddCard.cleanUpErrors(); // Сбрасываем ошибки формы добавления карточки
});

// Создаем экземпляр класса Section рендера массива карточек:
const defaultCardList = new Section({
  renderer: (cardItem) => {
    defaultCardList.setItem(createCard(cardItem));
  }
}, cardsList);

// Создаем экземпляр класса UserInfo для попапа редактирования профиля:
const userInfo = new UserInfo({
  nameSelector: profileName,
  aboutSelector: profileAbout,
  avatarSelector: profileAvatar
});

// Создаём массив с промисами
const promises = [api.getInitialCards(), api.getUserInfo()]

// Передаём массив с промисами методу Promise.all
Promise.all(promises)
  .then(([initialCards, userData]) => {
    // console.log(initialCards); // выведем результат в консоль
    defaultCardList.renderItems(initialCards);
    // console.log(userData); // выведем результат в консоль
    userInfo.setUserInfo(userData);
  })
  .catch((err) => {
    console.log(err);
  });

// Создаем экземпляр класса PopupWithForm для попапа редактирования профиля:
const popupProfile = new PopupWithForm(popupProfileEdit, (formData) => {
  api.sendUserInfo(formData)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    })
});

popupProfile.setEventListeners();

// Открываем попап редактирования аватара кликом на соответсвующую кнопку
editAvatarButton.addEventListener('click', () => {
  popupAvatar.open();
  formValidatorEditAvatar.cleanUpErrors(); // Сбрасываем ошибки формы редактирования аватара
});

// Создаем экземпляр класса PopupWithForm для попапа редактирования аватара профиля:
const popupAvatar = new PopupWithForm(popupAvatarEdit, (formData) => {
  api.sendUserAvatar(formData)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    })
});

popupAvatar.setEventListeners();

// Создаем экземпляр класса PopupWithForm для попапа добавления карточки:
const popupCard = new PopupWithForm(popupAddCard, (cardItem) => {
  api.postCard(cardItem)
    .then((res) => {
      defaultCardList.setItem(createCard(res), true); // Добавляем карточку в начало
    })
    .catch((err) => {
      console.log(err);
    })
});

popupCard.setEventListeners();

// Создаем экземпляр класса PopupWithDelete для попапа подтверждения удаления карточки:
const popupConfirmDeleteCard = new PopupWithDelete(popupConfirmDelete);

popupConfirmDeleteCard.setEventListeners();

// Функция создания новой карточки
function createCard(cardItem) {
  const card = new Card(cardItem.name, cardItem.link, cardItem.likes, cardItem._id, cardItem.userId, cardItem.ownerId, '#card-template',
    {
      handleCardClick: () => {
        popupWithImage.open(cardItem)
      },

      handleDeleteClick: (id) => {
        popupConfirmDeleteCard.setFormSubmitHandler(() => {
          api.deleteCard(id)
            .then(res => {
              card.deleteImage();
              popupConfirmDeleteCard.close();
            })
            .catch((err) => {
              console.log(err);
            });
        });
        popupConfirmDeleteCard.open();
      },

      handleLikeClick: (id) => {
        if (card.isLiked()) {
          api.removeLike(id)
            .then(res => {
              card.setLikes(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api.addLike(id)
            .then(res => {
              card.setLikes(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    })

  return card.generateCard();
}
