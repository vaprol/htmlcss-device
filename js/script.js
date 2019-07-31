(function () {
  // Открытие навигационного подменю каталога
  var catalogOpener = document.querySelector('.catalog-opener');
  var subMenu = document.querySelector('.catalog-submenu');

  catalogOpener.addEventListener('mouseenter', function () {
    subMenu.classList.remove('visually-hidden');
  });
  catalogOpener.addEventListener('mouseleave', function () {
    subMenu.classList.add('visually-hidden');
  })

  // Открытие-закрытие попапа карты
  var onMapOpenerButtonClick = document.querySelector('.bigmap-open');
  var mapPopup = document.querySelector('.map-popup');
  var onMapCloseButtonClick = mapPopup.querySelector('.close-popup');

  onMapOpenerButtonClick.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.toggle('visually-hidden');
  });
  onMapCloseButtonClick.addEventListener('click', function () {
    mapPopup.classList.add('visually-hidden');
  });


  // Открытие-закрытие попапа обратной связи
  var onFeedbackOpenerButtonClick = document.querySelector('.feedback-popup-opener');
  var feedbackPopup = document.querySelector('.feedback-popup');
  var onFeedbackCloseButtonClick = feedbackPopup.querySelector('.close-popup');

  onFeedbackOpenerButtonClick.addEventListener('click', function (evt) {
    feedbackPopup.classList.toggle('visually-hidden');
  });
  onFeedbackCloseButtonClick.addEventListener('click', function () {
    feedbackPopup.classList.add('visually-hidden');
  });
})();
