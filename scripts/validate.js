const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button_action_save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// Проверяем, валиден ли попап
 const validatePopup = (popupElement, formSetting) => {
  const inputList = Array.from(popupElement.querySelectorAll(formSetting.inputSelector));
  const buttonElement = popupElement.querySelector(formSetting.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, formSetting);

  inputList.forEach((inputElement) => {
    hideInputError(inputElement, formSetting);
  })
 };

// Функция, которая добавляет класс с ошибкой
const showInputError = (inputElement, errorMessage, formSetting) => {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.add(formSetting.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formSetting.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (inputElement, formSetting) => {
  const errorElement = inputElement.nextElementSibling;
  inputElement.classList.remove(formSetting.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(formSetting.errorClass);
};

// Настраиваем статус кнопки
const toggleButtonState = (inputList, buttonElement, formSetting) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formSetting.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(formSetting.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

// Проверяем все инпуты на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

// Функция, которая проверяет валидность поля
const isValid = (inputElement, formSetting) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage, formSetting);
  } else {
    hideInputError(inputElement, formSetting);
  }
};

// Добавление обработчиков всем полям формы
const setEventListeners = (formElement, formSetting) => {
  const inputList = Array.from(formElement.querySelectorAll(formSetting.inputSelector));
  const buttonElement = formElement.querySelector(formSetting.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, formSetting);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(inputElement, formSetting);
      toggleButtonState(inputList, buttonElement, formSetting);
    });
  });
};

// Добавление обработчиков всем формам
const enableValidation = (formSetting) => {
  const formList = Array.from(document.querySelectorAll(formSetting.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, formSetting);
  });
};

enableValidation(config);
