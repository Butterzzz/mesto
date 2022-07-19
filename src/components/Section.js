// Класс, который отвечает за отрисовку элементов на странице
export default class Section {

  // Принимает в конструктор два параметра
  // функцию, которая отвечает за создание и отрисовку данных на странице
  // селектор контейнера, в который нужно добавлять созданные элементы
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  // Публичный метод, который принимает DOM-элемент и добавляет его в контейнер
  setItem(element, isPrepend = false) {
    if (isPrepend) {
      this._container.prepend(element);
    } else {
      this._container.append(element);
    }
  }

  // Публичный метод, который отвечает за отрисовку всех элементов
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

}
