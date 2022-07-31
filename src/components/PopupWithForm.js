import Popup from './Popup.js';

// Класс, который наследуется от класса Popup
// Класс должен перезаписывать родительские методы setEventListeners и close
export default class PopupWithForm extends Popup {

  // Принимает в конструктор селектор попапа и колбэк сабмита формы
    constructor(popupSelector, submitFormHandler) {
      super(popupSelector);
      this._submitFormHandler = submitFormHandler;

      this._formElement = this._popupElement.querySelector('.popup__form');
      this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
      this.buttonElement = this._formElement.querySelector('.popup__button_action_save');
    }

  // Приватный метод, который собирает данные всех полей формы
    _getInputValues() {
      // создаём пустой объект
      this._formValues = {};
      // добавляем в этот объект значения всех полей
      this._inputList.forEach((inputElement) => {
        this._formValues[inputElement.name] = inputElement.value;
      });
      // возвращаем объект значений
      return this._formValues;
    }

  // Публичный метод, который перезаписывает родительский метод.
  // Метод должен не только добавлять обработчик клика иконке закрытия,
  // но и добавлять обработчик сабмита формы
    setEventListeners() {
      super.setEventListeners();
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();

    // добавим вызов функции _submitFormHandler
    // передадим ей объект — результат работы _getInputValues
      this._submitFormHandler(this._getInputValues());
      });
    }

  // Публичный метод, который перезаписывает родительский метод,
  // так как при закрытии попапа форма должна ещё и сбрасываться
    close() {
      super.close();
      this._formElement.reset();
    }

  }
