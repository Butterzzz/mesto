import Popup from './Popup.js';

// Класс, который наследуется от класса Popup. Отвечает за попап подтвердждения удаления карточки
export default class PopupWithDelete extends Popup {

  constructor(popupSelector) {
    super(popupSelector);

    this._formElement = this._popupElement.querySelector('.popup__form');
  }

  setFormSubmitHandler(handler) {
    this._handleSubmitCallback = handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleSubmitCallback();
    });
  }

}
