import { openPopup, popupPhotoView } from './index.js';

export default class Card {

  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .firstElementChild
      .cloneNode(true);

      return cardElement;
  }

  _handleElementLike() {
    this._element.querySelector('.card__button_action_like').classList.toggle('card__button_active');
  }

  _handleElementDelete() {
    this._element.remove();
  }

  _imagePreview() {
    popupPhotoView.querySelector('.popup__image').src = this._link;
    popupPhotoView.querySelector('.popup__image').alt = this._name;
    popupPhotoView.querySelector('.popup__image-caption').textContent = this._name;
    openPopup(popupPhotoView);
  }

  // Обработчики
  _setEventListeners() {
    this._element.querySelector('.card__button_action_like').addEventListener('click', () => this._handleElementLike());
    this._element.querySelector('.card__button_action_delete').addEventListener('click', () => this._handleElementDelete());
    this._element.querySelector('.card__image').addEventListener('click', () => this._imagePreview());
  }

  // Подготавливаем карточку к публикации
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); // добавим обработчики

    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;

    return this._element;
  }
}

