import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {

  constructor(popupSelector) {
    super(popupSelector);

    this._popupDelete = document.querySelector('.popup_type_delete');
  }

  setFormSubmitHandler(handler) {
    this._handleSubmitCallback = handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupDelete.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleSubmitCallback();
    });
  }

}
