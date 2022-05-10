const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile__button_action_edit');
const closeButton = document.querySelector('.popup__button_action_close');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');
// Находим форму в DOM
const formElement = document.querySelector('.form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.form__item_type_name');
let workInput = formElement.querySelector('.form__item_type_work');

const togglePopup = function (event) {
  popup.classList.toggle("popup_opened");
  if (popup.classList.contains("popup_opened")) {
  // Получаем значение полей workInput и nameInput из свойства value
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

// Вставляем новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileWork.textContent = workInput.value;
  togglePopup();
}

// Прикрепляем обработчик к форме
formElement.addEventListener('submit', formSubmitHandler);
