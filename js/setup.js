'use strict';

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
