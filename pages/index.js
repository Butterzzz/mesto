const openButton = document.querySelector('.profile__button_action_edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.form__button_action_close');
const saveButton = document.querySelector('.form__button_action_save');
const togglePopup = function (event) {
  popup.classList.toggle("popup_opened");
}

// Закрываем и открываем попап кликом на соответсвующие кнопки
openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
saveButton.addEventListener('click', togglePopup);


// Закрываем попап через клавишу Esc
document.addEventListener('keyup', (ev) => {
  if (ev.key === "Escape" && popup.classList.contains("popup_opened")) {
    togglePopup();
  }
})

// Находим форму в DOM
const formElement = document.querySelector('.form');

// Находим поля формы в DOM
const nameInput = formElement.querySelector('.form__item_type_name');
const workInput = formElement.querySelector('.form__item_type_work');

// Выбераем элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');

// Получаем значение полей workInput и nameInput из свойства value
nameInput.value = profileName.textContent;
workInput.value = profileWork.textContent;

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
  evt.preventDefault();  // Отменяем стандартную отправку формы

// Вставляем новые значения с помощью textContent
  profileName.textContent = nameInput.value;
  profileWork.textContent = workInput.value;
}

// Прикрепляем обработчик к форме
formElement.addEventListener('submit', formSubmitHandler);
