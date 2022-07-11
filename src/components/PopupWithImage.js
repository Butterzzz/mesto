import Popup from './Popup.js';

// Класс, который который наследуется от класса Popup. Класс должен перезаписывать родительский метод open
export default class PopupWithImage extends Popup {

  // Принимает в конструктор единственный параметр — селектор попапа
  constructor(popupSelector) {
    super(popupSelector);

    this._popupPhotoImage = this._popupElement.querySelector('.popup__image');
    this._popupPhotoCaption = this._popupElement.querySelector('.popup__image-caption');
  }

  // Публичный метод, который вставляет в попап картинку с src изображения и подписью к картинке
  open({ name, link }) {
    this._popupPhotoImage.src = link;
    this._popupPhotoImage.alt = name;
    this._popupPhotoCaption.textContent = name;
    super.open();
  }

}
