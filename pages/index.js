const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__button_action_edit');
const closeButton = document.querySelector('.popup__button_action_close');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');

const formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__item_type_name');
let workInput = formElement.querySelector('.form__item_type_work');

//1. Шесть карточек «из коробки»
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;
const initialCards = [
  {
    name: 'Владивосток',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-01.jpg',
    alt: 'Владивосток'
  },
  {
    name: 'Москва',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-02.jpg',
    alt: 'Москва'
  },
  {
    name: 'Хабаровск',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-03.jpg',
    alt: 'Хабаровск'
  },
  {
    name: 'Благовещенск',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-04.jpg',
    alt: 'Благовещенск'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-05.jpg',
    alt: 'Санкт-Петербург'
  },
  {
    name: 'Казань',
    link: 'https://raw.githubusercontent.com/Butterzzz/mesto/main/images/card-06.jpg',
    alt: 'Казань'
  }
];

initialCards.forEach((element) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.alt;

  cardsList.append(cardElement);
});

const togglePopup = function (event) {
  popup.classList.toggle("popup_opened");
  if (popup.classList.contains("popup_opened")) {
  nameInput.value = profileName.textContent;
  workInput.value = profileWork.textContent;
  }
}

// Закрываем и открываем попап кликом на соответсвующие кнопки
openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
  evt.preventDefault();  // Отменяем стандартную отправку формы
  profileName.textContent = nameInput.value;
  profileWork.textContent = workInput.value;
  togglePopup();
}

// Прикрепляем обработчик к форме
formElement.addEventListener('submit', formSubmitHandler);
