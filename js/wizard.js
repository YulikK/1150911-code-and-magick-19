'use strict';
(function () {
  window.wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  window.afterOpenPopup = function () {
    var setupWizard = document.querySelector('.setup-wizard');
    var wizardCoat = setupWizard.querySelector('.wizard-coat');
    var wizardEyes = setupWizard.querySelector('.wizard-eyes');
    var wizardFireball = document.querySelector('.setup-fireball-wrap');

    window.colorizeStart(wizardCoat);
    window.colorizeStart(wizardEyes);
    window.colorizeStart(wizardFireball);
  };

  window.afterClosePopup = function () {
    var setupWizard = document.querySelector('.setup-wizard');
    var wizardCoat = setupWizard.querySelector('.wizard-coat');
    var wizardEyes = setupWizard.querySelector('.wizard-eyes');
    var wizardFireball = document.querySelector('.setup-fireball-wrap');

    window.colorizeStop(wizardCoat);
    window.colorizeStop(wizardEyes);
    window.colorizeStop(wizardFireball);
  };

  window.colorizeStart = function (element) {
    element.addEventListener('click', window.onColorChange);
  };

  window.colorizeStop = function (element) {
    element.removeEventListener('click', window.onColorChange);
  };

})();
