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
  var mainSlider = document.querySelector('.promo-slider');
  var slides = mainSlider.querySelectorAll('.slider-list > li');

  var changeSlide = function () {
    var currentSlide = mainSlider.querySelector('.slide-shown');
    var currentSlideIndex = Array.from(slides).indexOf(currentSlide);
    var nextSlideIndex = 0;
    if ((currentSlideIndex + 1) < slides.length) {
      nextSlideIndex = currentSlideIndex + 1;
    }
    currentSlide.classList.remove('slide-shown');
    currentSlide.classList.add('slide-hidden');
    slides[nextSlideIndex].classList.remove('slide-hidden');
    slides[nextSlideIndex].classList.add('slide-shown');
    sliderButtons[currentSlideIndex].classList.remove('slider-button-selected');
    sliderButtons[nextSlideIndex].classList.add('slider-button-selected');
  };
  var sliderInterval = setInterval(changeSlide, 5000);

  var changeSlideManually = function (slideIndex) {
    mainSlider.querySelector('.slide-shown').classList.add('slide-hidden');
    mainSlider.querySelector('.slide-shown').classList.remove('slide-shown');
    slides[slideIndex-1].classList.remove('slide-hidden');
    slides[slideIndex-1].classList.add('slide-shown');
    mainSlider.querySelector('.slider-button-selected').classList.remove('slider-button-selected');
    sliderButtons[slideIndex-1].classList.add('slider-button-selected');
  };
  sliderButtonsNode.addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'BUTTON') {
      clearInterval(sliderInterval);
      changeSlideManually(Array.from(sliderButtons).indexOf(evt.target) + 1);
    }
  })
})();
