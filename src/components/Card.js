// Класс, который создаёт карточку с текстом и ссылкой на изображение
export default class Card {

  // Принимает в конструктор данные карточки, селектор её template-элемента
  // и функцию открытия попапа с картинкой при клике на карточку
  constructor(name, link, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;

    this._handleCardClick = handleCardClick;
  }

  // Приватный метод, который находит шаблон элемента карточки, клонирует его и возвращает
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .firstElementChild
      .cloneNode(true);
  }

  // Приватный метод, который меняет состояние "лайка"
  _handleElementLike() {
    this._likeButton.classList.toggle('card__button_active');
  }

  // Приватный метод, который удаляет элемент из DOM
  _handleElementDelete() {
    this._element.remove();
    this._element = null;
  }

  // Приватный метод, который устанавливает обработчики
  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__button_action_like');
    this._cardImage = this._element.querySelector('.card__image');

    this._likeButton.addEventListener('click', () => this._handleElementLike());
    this._element.querySelector('.card__button_action_delete').addEventListener('click', () => this._handleElementDelete());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  // Публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }

}

