'use strict';
(function () {
  var getRandomColor = function (evt) {
    var colors;
    if (evt.target.matches('.wizard-eyes')) {
      colors = window.WIZARD_EYES;
    } else if (evt.target.matches('.wizard-coat')) {
      colors = window.WIZARD_COAT;
    } else if (evt.target.matches('.setup-fireball')) {
      colors = window.WIZARD_FIREBALL;
    } else {
      colors = ['black'];
    }
    return colors[Math.floor(colors.length * Math.random())];
  };

  window.onColorChange = function (evt) {
    var color = getRandomColor(evt);
    var setup = document.querySelector('.setup');
    var coatColor = setup.querySelector('input[name="coat-color"]');
    var eyesColor = setup.querySelector('input[name="eyes-color"]');
    var fireballColor = setup.querySelector('.input[name="fireball-color"]');

    if (evt.target.tagName.toLowerCase() === 'div') {
      evt.target.style.backgroundColor = color;
      fireballColor.value = color;
    } else {
      evt.target.style.fill = color;
      if (evt.target.matches('.wizard-eyes')) {
        eyesColor.value = color;
        window.wizard.onEyesChange(color);
      } else if (evt.target.matches('.wizard-coat')) {
        coatColor.value = color;
        window.wizard.onCoatChange(color);
      } else {
        window.errorHandler('Ошибка установки цвета. Неизвестный источник.');
      }
    }
  };

})();
