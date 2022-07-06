// Попап редактирования профиля
export const popupProfileEdit = document.querySelector('.popup_type_edit-profile');
export const editProfileButton = document.querySelector('.profile__button_action_edit');
export const profileName = document.querySelector('.profile__name');
export const profileWork = document.querySelector('.profile__work');
// Его форма и импуты
export const formEditProfile = document.forms.editProfile;
export const nameInput = formEditProfile.elements.name;
export const workInput = formEditProfile.work;
// Попап добавления карточек
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const addCardButton = document.querySelector('.profile__button_action_add');
// Его форма и импуты
export const formAddCard = document.forms.addCard;
export const placeInput = formAddCard.name;
export const linkInput = formAddCard.link;
// Попап изображения
export const popupPhotoView = document.querySelector('.popup_type_photo-view');
export const popupPhotoImage = popupPhotoView.querySelector('.popup__image');
export const popupPhotoCaption = popupPhotoView.querySelector('.popup__image-caption');
// Родительский блок для карточек
export const cardsList = '.cards__list';

export const initialCards = [
  {
    name: 'Владивосток',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-01.jpg',
  },
  {
    name: 'Москва',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-02.jpg',
  },
  {
    name: 'Хабаровск',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-03.jpg',
  },
  {
    name: 'Благовещенск',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-04.jpg',
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-05.jpg',
  },
  {
    name: 'Казань',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-06.jpg',
  }
];

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button_action_save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
