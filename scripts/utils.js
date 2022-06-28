// Попап изображения
export const popupPhotoView = document.querySelector('.popup_type_photo-view');
export const popupPhotoImage = popupPhotoView.querySelector('.popup__image');
export const popupPhotoCaption = popupPhotoView.querySelector('.popup__image-caption');

// Открываем попап
export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', keyEscapeHandler); // Добавляем обработчик на Esc
}

// Закрываем попап
export function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyEscapeHandler); // Удаляем обработчик на Esc
}

// Закрываем открытый попап клавишей Esc
function keyEscapeHandler(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
