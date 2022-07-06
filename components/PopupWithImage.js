import Popup from './Popup.js';
import { popupPhotoImage, popupPhotoCaption } from '../utils/constants.js';

// Класс, который который наследуется от класса Popup. Класс должен перезаписывать родительский метод open
export default class PopupWithImage extends Popup {

  // Принимает в конструктор единственный параметр — селектор попапа
    constructor(popupSelector) {
      super(popupSelector);
    }

  // Публичный метод, который вставляет в попап картинку с src изображения и подписью к картинке
    open(name, link) {
      popupPhotoImage.src = link;
      popupPhotoImage.alt = name;
      popupPhotoCaption.textContent = name;
      super.open();
    }

  }
