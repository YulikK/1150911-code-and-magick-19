'use strict';

window.fireballSize = 22;
window.getFireballSpeed = function (left) {
  return left ? 5 : 2;
};
window.wizardSpeed = 3;
var wizardWidth = 70;
window.getWizardHeight = function (width) {
  return width * 1.337;
};

window.getWizardX = function (width) {
  return width / 2 - wizardWidth / 2;
};

window.getWizardY = function (height) {
  return height * 2 / 3 - window.getWizardHeight(wizardWidth) / 2;
};

