import { openPopup, popupPhotoView } from './index.js';

// Принимает в конструктор данные карточки и селектор её template-элемента
export default class Card {

  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  // Приватный метод, который находит шаблон элемента карточки, клонирует его и возвращает
  _getTemplate() {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .firstElementChild
      .cloneNode(true);

      return cardElement;
  }

  // Приватный метод, который меняет состояние "лайка"
  _handleElementLike() {
    this._element.querySelector('.card__button_action_like').classList.toggle('card__button_active');
  }

  // Приватный метод, который удаляет элемент из DOM
  _handleElementDelete() {
    this._element.remove();
  }

  // Приватный метод, который наполняет карточку и открывает попап с картинкой
  _imagePreview() {
    popupPhotoView.querySelector('.popup__image').src = this._link;
    popupPhotoView.querySelector('.popup__image').alt = this._name;
    popupPhotoView.querySelector('.popup__image-caption').textContent = this._name;
    openPopup(popupPhotoView);
  }

  // Приватный метод, который устанавливает обработчики
  _setEventListeners() {
    this._element.querySelector('.card__button_action_like').addEventListener('click', () => this._handleElementLike());
    this._element.querySelector('.card__button_action_delete').addEventListener('click', () => this._handleElementDelete());
    this._element.querySelector('.card__image').addEventListener('click', () => this._imagePreview());
  }

  // Публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;

    return this._element;
  }

}

