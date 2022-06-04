const popupProfileEdit = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupPhotoView = document.querySelector('.popup_type_photo-view');
const popupImage = popupPhotoView.querySelector('.popup__image');
const popupImageCaption = popupPhotoView.querySelector('.popup__image-caption');

const editProfileButton = document.querySelector('.profile__button_action_edit');
const addCardButton = document.querySelector('.profile__button_action_add');
const closeButtons = document.querySelectorAll('.popup__button_action_close');

const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');

const formEditProfile = document.querySelector('.form_type_edit-profile');
const nameInput = formEditProfile.querySelector('.form__item_type_name');
const workInput = formEditProfile.querySelector('.form__item_type_work');

const formAddCard = document.querySelector('.form_type_add-card');
const placeInput = formAddCard.querySelector('.form__item_type_place');
const linkInput = formAddCard.querySelector('.form__item_type_link');

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
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
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

// Закрываем попапы кликом на крестик
closeButtons.forEach((button) => {
  button.addEventListener('click', function(evt) {
    const button = evt.target;
    const popupElement = button.closest('.popup');
    closePopup(popupElement);
  });
});

// Закрываем открытый попап клавишей Esc
function keyEscapeHandler(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

renderListCard(initialCards);
document.addEventListener('keydown', keyEscapeHandler);
formEditProfile.addEventListener('submit', formSubmitHandler);
formAddCard.addEventListener('submit', addCardHandler);
