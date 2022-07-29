// Класс, который создаёт карточку
export default class Card {

  constructor(name, link, likes, id, userId, ownerId, cardSelector, { handleCardClick, handleDeleteClick, handleLikeClick }) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = id; // id карточки
    this._userId = userId; // id текущего пользователя
    this._ownerId = ownerId; // id создателя карточки

    this._cardSelector = cardSelector;

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  // Приватный метод, который находит шаблон элемента карточки, клонирует его и возвращает
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .firstElementChild
      .cloneNode(true);
  }

  // Приватный метод, который находит все классы
  _findCardComponents() {
    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._deleteButton = this._element.querySelector('.card__button_action_delete');
    this._likeButton = this._element.querySelector('.card__button_action_like');
    this._likesCounter = this._element.querySelector('.card__like-counter');
  }

  // Приватный метод, который заполняет класс карточки данными
  _fillClassData() {
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
  }

  // Приватный метод, который устанавливает иконку удаления только на созданных мной карточках
  _setDeleteIcon() {
    if (this._ownerId !== this._userId) {
      this._deleteButton.remove()
    }
  }

  // Публичный метод, который удаляет элемент из DOM
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  // Публичный метод, который устанавливает лайки
  setLikes(newLikes) {
    this._likes = newLikes;
    this._likesCounter.textContent = newLikes.length;
    if (this.isLiked()) {
      this._likeButton.classList.add('card__button_active');
    } else {
      this._likeButton.classList.remove('card__button_active');
    }
  }

  // Публичный метод, который проверяет, установлен ли лайк
  isLiked() {
    return this._likes.find(user => user._id == this._userId);
  }

  // Приватный метод, который устанавливает обработчики
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  // Публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки
  generateCard() {
    this._element = this._getTemplate();
    this._findCardComponents();
    this._fillClassData();

    this._setDeleteIcon();
    this.setLikes(this._likes);

    this._setEventListeners();

    return this._element;
  }

}

