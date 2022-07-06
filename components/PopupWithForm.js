import Popup from './Popup.js';
import { formEditProfile, nameInput, workInput, formAddCard, placeInput, linkInput } from '../utils/constants.js';

// Класс, который который наследуется от класса Popup. Класс должен перезаписывать родительские методы setEventListeners и close
export default class PopupWithForm extends Popup {

  // Принимает в конструктор селектор попапа и колбэк сабмита формы
    constructor(popupSelector, submitForm) {
      super(popupSelector);
      this._submitForm = submitForm;
    }

  // Приватный метод, который собирает данные всех полей формы
    _getInputValues() {

    }

  // Публичный метод, который перезаписывает родительский метод. Метод должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы
    setEventListeners() {
      super.setEventListeners();
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();

      this.close();
      });
    }

  // Публичный метод, который перезаписывает родительский метод, так как при закрытии попапа форма должна ещё и сбрасываться
    close() {
      super.close();
      this._formElement.reset();
    }

  }
