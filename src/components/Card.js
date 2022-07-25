// Класс, который создаёт карточку с текстом и ссылкой на изображение
export default class Card {

  // Принимает в конструктор данные карточки, селектор её template-элемента
  // и функцию открытия попапа с картинкой при клике на карточку
  constructor(name, link, likes, id, userId, ownerId, cardSelector, { handleCardClick, handleDeleteClick, handleLikeClick }) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = id;
    this._userId = userId;
    this._ownerId = ownerId;

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

  // // Приватный метод, который меняет состояние "лайка"
  // _handleElementLike() {
  //   this._likeButton.classList.toggle('card__button_active');
  // }

  isLiked() {
    const userHasLikedCard = this._likes.find(
      user => user._id === this._userId
    );
    return userHasLikedCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._element.querySelector('.card__like-counter');
    likeCountElement.textContent = newLikes.length;
    if (this.isLiked()) {
      this._addLike();
    } else {
      this._removeLike();
    }
  }

  _addLike () {
    this._likeButton.classList.add('card__button_active');
  }

  _removeLike () {
    this._likeButton.classList.remove('card__button_active');
  }

  // Публичный метод, который удаляет элемент из DOM
  deleteImage() {
    this._element.remove();
    this._element = null;
  }

  // Приватный метод, который устанавливает обработчики
  _setEventListeners() {
    this._likeButton = this._element.querySelector('.card__button_action_like');
    this._deleteButton = this._element.querySelector('.card__button_action_delete');
    this._cardImage = this._element.querySelector('.card__image');

    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  // Публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this.setLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._deleteButton.style.display = 'none';
    }

    this._element.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }

}

