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
  var sliderButtonsNode = document.querySelector('.slider-handlers');
  var sliderButtons = sliderButtonsNode.querySelectorAll('.slider-select');

  var changeSlide = function (slideIndex) {
    var slides = document.querySelectorAll('.slider-list > li');
    if (slideIndex) {
      for (var j = 1; j <= slides.length; j++) {
        if (slideIndex === j) {
          slides[j-1].style.opacity = '1';
          sliderButtons[j-1].classList.add('slider-button-selected');
        } else {
          slides[j-1].style.opacity = '0';
          sliderButtons[j-1].classList.remove('slider-button-selected');
        }
      }
    } else {
      for (var i = 0; i < slides.length; i++) {
        var slide = slides[i];
        if (slide.style.opacity === '1') {
          slide.style.opacity = '0';
          sliderButtons[i].classList.remove('slider-button-selected');
          if (slides[i + 1]) {
            slides[i + 1].style.opacity = '1';
            sliderButtons[i + 1].classList.add('slider-button-selected');
          } else {
            slides[0].style.opacity = '1';
            sliderButtons[0].classList.add('slider-button-selected');
          }
          break;
        }
      }
    }
  };
  var sliderInterval = setInterval(changeSlide, 5000);

  sliderButtonsNode.addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'BUTTON') {
      clearInterval(sliderInterval);
      changeSlide(Array.from(sliderButtons).indexOf(evt.target) + 1);
    }

  })
})();
