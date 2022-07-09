import Popup from './Popup.js';

// Класс, который который наследуется от класса Popup
// Класс должен перезаписывать родительские методы setEventListeners и close
export default class PopupWithForm extends Popup {

  // Принимает в конструктор селектор попапа и колбэк сабмита формы
    constructor(popupSelector, submitFormHandler) {
      super(popupSelector);
      this._submitFormHandler = submitFormHandler;

      this._formElement = this._popupElement.querySelector('.popup__form');
      this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    }

  // Приватный метод, который собирает данные всех полей формы
    _getInputValues() {
      const formValues = {};
      this._inputList.forEach((inputElement) => {
        formValues[inputElement.name] = inputElement.value;
      });

      return formValues;
    }

  // Публичный метод, который перезаписывает родительский метод.
  // Метод должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы
    setEventListeners() {
      super.setEventListeners();
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();

      this._submitFormHandler(this._getInputValues());

      this.close();
      });
    }

  // Публичный метод, который перезаписывает родительский метод, так как при закрытии попапа форма должна ещё и сбрасываться
    close() {
      super.close();
      this._formElement.reset();
    }

  }
