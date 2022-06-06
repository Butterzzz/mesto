const popupProfileEdit = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupPhotoView = document.querySelector('.popup_type_photo-view');
const popupImage = popupPhotoView.querySelector('.popup__image');
const popupImageCaption = popupPhotoView.querySelector('.popup__image-caption');

const editProfileButton = document.querySelector('.profile__button_action_edit');
const addCardButton = document.querySelector('.profile__button_action_add');
// const closeButtons = document.querySelectorAll('.popup__button_action_close');

const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');

// Формы и их инпуты
const formEditProfile = document.forms.editProfile;
const nameInput = formEditProfile.elements.name;
const workInput = formEditProfile.work;
const formAddCard = document.forms.addCard;
const placeInput = formAddCard.name;
const linkInput = formAddCard.link;

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('popup__input_type_error');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!nameInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(nameInput);
  } else {
    // Если проходит, скроем
    hideInputError(nameInput);
  }
};

formEditProfile.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});

// Вызовем функцию isValid на каждый ввод символа
nameInput.addEventListener('input', isValid);


const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard({name, link}) {
  const cardElement = cardTemplate.firstElementChild.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__button_action_like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__button_active');
  });
  cardElement.querySelector('.card__button_action_delete').addEventListener('click', function(evt) {
    const deleteItem = evt.target.closest('.cards__item');
    deleteItem.remove();
   });
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  cardImage.addEventListener('click', () => imagePreview(cardImage));
  return cardElement;
}

// Добавил переменную-флажок внутри функции renderCard, чтобы управлять логикой как добавлять элементы
function renderCard(cardElement, isPrepend = false) {
  if(isPrepend) {
    cardsList.prepend(cardElement);
  } else {
    cardsList.append(cardElement);
  }
}

function renderListCard(data) {
  data.forEach(card => renderCard(createCard(card)));
}

function imagePreview(data) {
  openPopup(popupPhotoView);
  popupImage.src = data.src;
  popupImage.alt = data.alt;
  popupImageCaption.textContent = data.alt;
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', keyEscapeHandler);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyEscapeHandler);
}

// Закрываем открытый попап клавишей Esc
function keyEscapeHandler(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Закрываем попап кликом на оверлей или на крестик
function clickCloseHandler(evt) {
  const target = evt.target;
  if(target.classList.contains('popup__button_action_close') || target.classList.contains('popup_opened')) {
    closePopup(evt.currentTarget);
  };
}

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWork.textContent = workInput.value;
  closePopup(popupProfileEdit);
}

// Обработчик добавления карточки
function addCardHandler(evt) {
  evt.preventDefault();
  const name = placeInput.value;
  const link = linkInput.value;
  renderCard(createCard({name, link}), true); //Добавляем карточку в начало
  closePopup(popupAddCard);
  formAddCard.reset();
}

// Открываем попапы кликом на соответсвующие кнопки
editProfileButton.addEventListener('click', function() {
  openPopup(popupProfileEdit); // открываем попап редактирования
  nameInput.value = profileName.textContent;
  workInput.value = profileWork.textContent;
});

addCardButton.addEventListener('click', function() {
  openPopup(popupAddCard); // открываем попап добавления
});

// // Закрываем попапы кликом на крестик
// closeButtons.forEach((button) => {
//   button.addEventListener('click', function(evt) {
//     const button = evt.target;
//     const popupElement = button.closest('.popup');
//     closePopup(popupElement);
//   });
// });

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

renderListCard(initialCards);
formEditProfile.addEventListener('submit', formSubmitHandler);
formAddCard.addEventListener('submit', addCardHandler);
popupProfileEdit.addEventListener('click', clickCloseHandler);
popupAddCard.addEventListener('click', clickCloseHandler);
popupPhotoView.addEventListener('click', clickCloseHandler);
