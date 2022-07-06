// Класс, который отвечает за открытие и закрытие попапа
export default class Popup {

  // Принимает в конструктор единственный параметр — селектор попапа
    constructor(popupSelector) {
      this._popupElement = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }

  // Публичный метод, который отвечает за открытие попапа
    open() {
      this._popupElement.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }

  // Публичный метод, который отвечает за закрытие попапа
    close() {
      this._popupElement.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }

  // Приватный метод, который содержит логику закрытия попапа клавишей Esc
    _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }

    // Публичный метод, который добавляет слушатель клика иконке закрытия попапа
    setEventListeners() {
      this._popupElement.addEventListener('mousedown', (evt) => {
      const target = evt.target;
      if(target.classList.contains('popup__button_action_close') || target.classList.contains('popup_opened')) {
        this.close();
        };
      });
    }

  }
