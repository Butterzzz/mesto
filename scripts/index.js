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
const popupPhotoView = document.querySelector('.popup_type_photo-view');
const popupImage = popupPhotoView.querySelector('.popup__image');
const popupImageCaption = popupPhotoView.querySelector('.popup__image-caption');
// Родительский блок для карточек
const cardsList = document.querySelector('.cards__list');
// Шаблон карточки
const cardTemplate = document.querySelector('#card-template').content;


// Открываем попап
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', keyEscapeHandler); // Добавляем обработчик на Esc
}

// Открываем попап редактирования профиля
function openPopupProfile() {
  openPopup(popupProfileEdit);
  nameInput.value = profileName.textContent;
  workInput.value = profileWork.textContent;
  validatePopup(popupProfileEdit, config); // Валидируем попап редактирования профиля
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
  validatePopup(popupAddCard, config); // Валидируем попап добавления карточки
}

// Настройка добавления карточки
function addCardHandler (evt) {
  evt.preventDefault();
  const name = placeInput.value;
  const link = linkInput.value;
  renderCard(createCard({name, link}), true); // Добавляем карточку в начало
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

function imagePreview(data) {
  popupImage.src = data.src;
  popupImage.alt = data.alt;
  popupImageCaption.textContent = data.alt;
  openPopup(popupPhotoView);
}

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

// Передаем массив с карточками в функцию
renderListCard(initialCards);

formEditProfile.addEventListener('submit', editSubmitHandler);
formAddCard.addEventListener('submit', addCardHandler);

editProfileButton.addEventListener('click', openPopupProfile);
addCardButton.addEventListener('click', openPopupAdd);

popupProfileEdit.addEventListener('click', clickCloseHandler);
popupAddCard.addEventListener('click', clickCloseHandler);
popupPhotoView.addEventListener('click', clickCloseHandler);
