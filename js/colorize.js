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
    }
    return colors[Math.floor(colors.length * Math.random())];
  };

  var onColorChange = function (evt) {
    var color = getRandomColor(evt);
    if (evt.target.tagName.toLowerCase() === 'div') {
      evt.target.style.backgroundColor = color;
    } else {
      evt.target.style.fill = color;
    }
  };

  window.colorizeStart = function (element) {
    element.addEventListener('click', onColorChange);
  };

  window.colorizeStop = function (element) {
    element.removeEventListener('click', onColorChange);
  };
})();
