const popupProfileEdit = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');

const editProfileButton = document.querySelector('.profile__button_action_edit');
const addCardButton = document.querySelector('.profile__button_action_add');
const closeButtons = document.querySelectorAll('.popup__button_action_close');

const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');

const formEditProfile = document.querySelector('.form_type_edit-profile');
const nameInput = formEditProfile.querySelector('.form__item_type_name');
const workInput = formEditProfile.querySelector('.form__item_type_work');

const formAddCard = document.querySelector('.form_type_add-card');
let placeInput = formAddCard.querySelector('.form__item_type_place');
let linkInput = formAddCard.querySelector('.form__item_type_link');

const cardsList = document.querySelector('.cards__list');
const initialCards = [
  {
    name: 'Казань',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-06.jpg',
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-05.jpg',
  },
  {
    name: 'Благовещенск',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-04.jpg',
  },
  {
    name: 'Хабаровск',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-03.jpg',
  },
  {
    name: 'Москва',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-02.jpg',
  },
  {
    name: 'Владивосток',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-01.jpg',
  }
];

function renderListCard(data) {
  data.forEach(function (item) {
    return renderCard(item);
  });
}

function renderCard(data) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');

  cardElement.querySelector('.card__button_action_like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button_active');
  });

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardsList.prepend(cardElement);
}

//popups
function togglePopup(popupElement) {
  popupElement.classList.toggle("popup_opened");
  if (popupElement.classList.contains("popup_opened")) {
  nameInput.value = profileName.textContent;
  workInput.value = profileWork.textContent;
  }
}

function closePopup(evt) {
  let button = evt.target;
  let popupElement = button.closest(".popup");
  togglePopup(popupElement);
}

// Открываем попапы кликом на соответсвующие кнопки
editProfileButton.addEventListener('click', function() {
  togglePopup(popupProfileEdit); // открываем попап редактирования
});

addCardButton.addEventListener('click', function() {
  togglePopup(popupAddCard); // открываем попап добавления
});

// Закрываем попапы кликом на крестик
closeButtons.forEach((button) => {
  button.addEventListener("click", closePopup);
});

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWork.textContent = workInput.value;
  togglePopup(popupProfileEdit);
}

// Обработчик добавления карточки
function AddCardHandler (evt) {
  evt.preventDefault();
  let name = placeInput.value;
  let link = linkInput.value;

  renderCard({name, link});
  togglePopup(popupAddCard);

  placeInput.value = '';
  linkInput.value = '';
}

renderListCard(initialCards);
formEditProfile.addEventListener('submit', formSubmitHandler);
formAddCard.addEventListener('submit', AddCardHandler);
