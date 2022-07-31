(()=>{"use strict";var e=document.querySelector(".profile__button_action_edit"),t=document.forms.editProfile,n=t.elements.name,r=t.about,o=document.querySelector(".profile__button_action_add"),i=document.forms.addCard,a=(i.name,i.link,document.querySelector(".profile__button_action_edit-avatar")),c=document.forms.editAvatar,u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button_action_save",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n,r,o,i,a,c,u){var s=u.handleCardClick,l=u.handleDeleteClick,f=u.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._likes=r,this._id=o,this._userId=i,this._ownerId=a,this._cardSelector=c,this._handleCardClick=s,this._handleDeleteClick=l,this._handleLikeClick=f}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.firstElementChild.cloneNode(!0)}},{key:"_findCardComponents",value:function(){this._cardImage=this._element.querySelector(".card__image"),this._cardTitle=this._element.querySelector(".card__title"),this._deleteButton=this._element.querySelector(".card__button_action_delete"),this._likeButton=this._element.querySelector(".card__button_action_like"),this._likesCounter=this._element.querySelector(".card__like-counter")}},{key:"_fillClassData",value:function(){this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name}},{key:"_setDeleteIcon",value:function(){this._ownerId!==this._userId&&this._deleteButton.remove()}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"setLikes",value:function(e){this._likes=e,this._likesCounter.textContent=e.length,this.isLiked()?this._likeButton.classList.add("card__button_active"):this._likeButton.classList.remove("card__button_active")}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id==e._userId}))}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._deleteButton.addEventListener("click",(function(){return e._handleDeleteClick(e._id)})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._findCardComponents(),this._fillClassData(),this._setDeleteIcon(),this.setLikes(this._likes),this._setEventListeners(),this._element}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=p((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"_showInputError",(function(e,t){var n=e.nextElementSibling;e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),h(this,"_hideInputError",(function(e){var t=e.nextElementSibling;e.classList.remove(r._inputErrorClass),t.textContent="",t.classList.remove(r._errorClass)})),h(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0)):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),h(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),h(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),h(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r._toggleButtonState()}))}))})),h(this,"cleanUpErrors",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),h(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"setItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this._container.prepend(e):this._container.append(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}],n&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){var n=t.target;(n.classList.contains("popup__button_action_close")||n.classList.contains("popup_opened"))&&e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function C(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupPhotoImage=t._popupElement.querySelector(".popup__image"),t._popupPhotoCaption=t._popupElement.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._popupPhotoImage.src=n,this._popupPhotoImage.alt=t,this._popupPhotoCaption.textContent=t,E(S(a.prototype),"open",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFormHandler=t,n._formElement=n._popupElement.querySelector(".popup__form"),n._inputList=Array.from(n._formElement.querySelectorAll(".popup__input")),n.buttonElement=n._formElement.querySelector(".popup__button_action_save"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;P(U(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormHandler(e._getInputValues()),e.close()}))}},{key:"close",value:function(){P(U(a.prototype),"close",this).call(this),this._formElement.reset()}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function V(e,t){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},V(e,t)}function N(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formElement=t._popupElement.querySelector(".popup__form"),t}return t=a,(n=[{key:"setFormSubmitHandler",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;A(H(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileAbout=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfoObj={name:this._profileName.textContent,about:this._profileAbout.textContent},this._userInfoObj}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._profileName.textContent=t,this._profileAbout.textContent=n,this._profileAvatar.src=r}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $,K=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkServerResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkServerResponse)}},{key:"sendUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkServerResponse)}},{key:"sendUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkServerResponse)}},{key:"postCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._checkServerResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkServerResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkServerResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkServerResponse)}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-46",headers:{authorization:"47e90631-cd63-40cb-8d27-e2882de3dcef","Content-Type":"application/json"}}),Q=new d(u,t);Q.enableValidation();var W=new d(u,c);W.enableValidation();var X=new d(u,i);X.enableValidation();var Y=new O(".popup_type_photo-view");Y.setEventListeners(),e.addEventListener("click",(function(){ne.open();var e=ee.getUserInfo(),t=e.name,o=e.about;n.value=t,r.value=o,Q.cleanUpErrors()})),o.addEventListener("click",(function(){oe.open(),X.cleanUpErrors()}));var Z=new y({renderer:function(e){Z.setItem(ae({name:e.name,link:e.link,likes:e.likes,_id:e._id,userId:$,ownerId:e.owner._id}))}},".cards__list"),ee=new G({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__image"}),te=[K.getInitialCards(),K.getUserInfo()];Promise.all(te).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ee.setUserInfo(i),$=i._id,Z.renderItems(o)})).catch((function(e){console.log(e)}));var ne=new B(".popup_type_edit-profile",(function(e){ne.buttonElement.textContent="Сохранение...",K.sendUserInfo(e).then((function(e){ee.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){ne.buttonElement.textContent="Сохранить"}))}));ne.setEventListeners(),a.addEventListener("click",(function(){re.open(),W.cleanUpErrors()}));var re=new B(".popup_type_avatar",(function(e){re.buttonElement.textContent="Сохранение...",K.sendUserAvatar(e).then((function(e){ee.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){re.buttonElement.textContent="Сохранить"}))}));re.setEventListeners();var oe=new B(".popup_type_add-card",(function(e){oe.buttonElement.textContent="Сохранение...",K.postCard(e).then((function(e){var t={name:e.name,link:e.link,likes:e.likes,_id:e._id,userId:$,ownerId:e.owner._id};Z.setItem(ae(t),!0)})).catch((function(e){console.log(e)})).finally((function(){oe.buttonElement.textContent="Создать"}))}));oe.setEventListeners();var ie=new F(".popup_type_delete");function ae(e){var t=new l(e.name,e.link,e.likes,e._id,$,e.ownerId,"#card-template",{handleCardClick:function(){Y.open(e)},handleDeleteClick:function(e){ie.setFormSubmitHandler((function(){K.deleteCard(e).then((function(e){t.deleteCard(),ie.close()})).catch((function(e){console.log(e)}))})),ie.open()},handleLikeClick:function(e){t.isLiked()?K.removeLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)})):K.addLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}});return t.generateCard()}ie.setEventListeners()})();