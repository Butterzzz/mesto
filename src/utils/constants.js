// Попап редактирования профиля
export const popupProfileEdit ='.popup_type_edit-profile';
export const editProfileButton = document.querySelector('.profile__button_action_edit');
export const profileName = '.profile__name';
export const profileAbout = '.profile__about';
export const profileAvatar = '.profile__image';
// Его форма и импуты
export const formEditProfile = document.forms.editProfile;
export const nameInput = formEditProfile.elements.name;
export const aboutInput = formEditProfile.about;
// Попап добавления карточек
export const popupAddCard = '.popup_type_add-card';
export const addCardButton = document.querySelector('.profile__button_action_add');
// Его форма и импуты
export const formAddCard = document.forms.addCard;
export const placeInput = formAddCard.name;
export const linkInput = formAddCard.link;

// Попап изображения
export const popupPhotoView = '.popup_type_photo-view';

// Попап изменения аватара
export const popupAvatarEdit = '.popup_type_avatar';
export const editAvatarButton = document.querySelector('.profile__button_action_edit-avatar');

// Его форма
export const formEditAvatar = document.forms.editAvatar;

// Попап подтверждения удаления карточки
export const popupConfirmDelete = '.popup_type_delete';

// Родительский блок для карточек
export const cardsList = '.cards__list';

// export const initialCards = [
//   {
//     name: 'Владивосток',
//     link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/src/images/card-01.jpg',
//   },
//   {
//     name: 'Москва',
//     link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/src/images/card-02.jpg',
//   },
//   {
//     name: 'Хабаровск',
//     link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/src/images/card-03.jpg',
//   },
//   {
//     name: 'Благовещенск',
//     link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/src/images/card-04.jpg',
//   },
//   {
//     name: 'Санкт-Петербург',
//     link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/src/images/card-05.jpg',
//   },
//   {
//     name: 'Казань',
//     link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/src/images/card-06.jpg',
//   }
// ];

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button_action_save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
