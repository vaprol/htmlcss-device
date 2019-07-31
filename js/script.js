(function () {
// Открытие навигационного подменю каталога
  var catalogOpener = document.querySelector('.catalog-opener');
  var subMenu = document.querySelector('.catalog-submenu');

  catalogOpener.addEventListener('mouseenter', function () {
    subMenu.classList.remove('visually-hidden');
  });
  catalogOpener.addEventListener('mouseleave', function () {
    subMenu.classList.add('visually-hidden');
  });

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

//  Работа со слайдером
  var changeSlide = function () {
    var slides = document.querySelectorAll('.slider-list > li');
    for (var i = 0; i < slides.length; i++) {
      var slide = slides[i];
      if (slide.style.opacity === '1') {
        slide.style.opacity = '0';
        if (slides[i+1]) {
          slides[i+1].style.opacity = '1';
        } else {
          slides[0].style.opacity = '1';
        }
        break;
      }
    }
  };

  var sliderInterval = setInterval(changeSlide, 5000);
})();
