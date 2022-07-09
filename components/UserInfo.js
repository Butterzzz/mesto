// Класс, который отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {

  // Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
    constructor({ nameSelector, workSelector }) {
      this._profileName = document.querySelector(nameSelector);
      this._profileWork = document.querySelector(workSelector);
    }

  // Публичный метод, который возвращает объект с данными пользователя.
  // Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
    getUserInfo() {
      this._userInfoObj = {
        name: this._profileName.textContent,
        work: this._profileWork.textContent
      }

      return this._userInfoObj;
    }

  // Публичный метод, который принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(name, work) {
      this._profileName.textContent = name;
      this._profileWork.textContent = work;
    }

  }
