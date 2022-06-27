export default class FormValidator {

  // Принимает в конструктор объект настроек с селекторами и классами формы
  // Принимает вторым параметром элемент той формы, которая валидируется;
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._formElement = formElement;
  }

  // Приватный метод, который добавляет класс с ошибкой
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = inputElement.nextElementSibling;

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  // Приватный метод, который удаляет класс с ошибкой
  _hideInputError = (inputElement) => {
    const errorElement = inputElement.nextElementSibling;

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  // Приватный метод, который изменяет состояние кнопки сабмита
  _toggleButtonState = () => {
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  // Приватный метод, который проверяет валидность поля
  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Приватный метод, который проверяет все поля на валидность
  _hasInvalidInput = () => {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  // Приватный метод, который устанавливают обработчики всем полям формы
  _setEventListeners = () => {

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // Публичный метод, который сбрасывает ошибки формы
  cleanUpErrors = () => {

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
  }

  // Публичный метод, который включает валидацию формы
  enableValidation = () => {

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }

}
