// Класс, который отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {

  // Принимает в конструктор объект с селекторами трех элементов:
  // элемента имени пользователя
  // элемента информации о себе
  // элемента аватара
    constructor({ nameSelector, aboutSelector, avatarSelector }) {
      this._profileName = document.querySelector(nameSelector);
      this._profileAbout = document.querySelector(aboutSelector);
      this._profileAvatar = document.querySelector(avatarSelector);
    }

  // Публичный метод, который возвращает объект с данными пользователя.
  // Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
    getUserInfo() {
      this._userInfoObj = {
        name: this._profileName.textContent,
        about: this._profileAbout.textContent
      }

      return this._userInfoObj;
    }

  // Публичный метод, который принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({ name, about, avatar }) {
      this._profileName.textContent = name;
      this._profileAbout.textContent = about;
      this._profileAvatar.src = avatar;
    }

  }
