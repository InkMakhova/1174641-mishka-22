let header = document.querySelector('.page-header');
let button = header.querySelector('.toggle');
let navElement = header.querySelector('.page-header__main-nav');
let menuElement = header.querySelector('.page-header__menu-list');

//открытие-закрытие мобильного меню
function toggleMenu() {
  //кнопка доступна, когда подключен JS
  button.classList.remove('toggle--nojs');
  //переключаем класс
  navElement.classList.toggle('main-nav--closed');
  menuElement.classList.toggle('menu--closed');
}

//меняет у кнопки aria-label
function toggleAriaLabel() {
  if (button.ariaLabel == 'Открыть меню') {
    button.ariaLabel = 'Закрыть меню';
  } else {
    button.ariaLabel = 'Открыть меню';
  }
}

//скрывает меню при открытии страницы
toggleMenu();
button.addEventListener('click', toggleMenu);
button.addEventListener('click', toggleAriaLabel);

//открытие и закрытие модального окна
let linkOpenModal = document.querySelector('.promo-card__link');
let linkAddToCart = document.querySelectorAll('.product-card__cart-link');
let modalOverlay = document.querySelector('.modal-overlay');
let modal = document.querySelector('.modal');

//открытие
function openModal(evt) {
  evt.preventDefault();
  modalOverlay.classList.add('modal-overlay--show');
  modal.classList.add('modal--show');
}

//закрытие
window.addEventListener('keydown', function(evt) {
  if (evt.code === 'Escape') {
    modalOverlay.classList.remove('modal-overlay--show');
    modal.classList.remove('modal--show');
  }
});

modalOverlay.addEventListener('mousedown', function(evt) {
  modalOverlay.classList.remove('modal-overlay--show');
  modal.classList.remove('modal--show');
});

//вызов модального окна
if (linkOpenModal !== null) {
  linkOpenModal.addEventListener('click', openModal);
}

for (let i = 0; i < linkAddToCart.length; i++) {
  linkAddToCart[i].addEventListener('click', openModal);
}
