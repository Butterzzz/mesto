export default class Section {

// Принимает в конструктор два параметра
// объект с двумя свойствами: массив данных, которые нужно добавить на страницу при инициализации класса и функция, которая отвечает за создание и отрисовку данных на странице
// селектор контейнера, в который нужно добавлять созданные элементы
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

// Публичный метод, который принимает DOM-элемент и добавляет его в контейнер
  setItem(element) {
    this._container.append(element);
  }

// Публичный метод, который отвечает за отрисовку всех элементов
  renderItems() {
  this._initialArray.forEach(item => {
    this._renderer(item);
    });
  }

}
