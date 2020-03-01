'use strict';
window.WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
window.WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
window.WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizards = [];
var coatColor;
var eyesColor;

var getRank = function (wizard) {
  var rank = 0;

  if (wizard.colorCoat === coatColor) {
    rank += 2;
  }
  if (wizard.colorEyes === eyesColor) {
    rank += 1;
  }

  return rank;
};

var namesComparator = function (left, right) {
  if (left > right) {
    return 1;
  } else if (left < right) {
    return -1;
  } else {
    return 0;
  }
};

var updateWizards = function () {

  window.render(wizards.sort(function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  }));

};

window.wizard.onEyesChange = window.debounce(function (color) {
  eyesColor = color;
  updateWizards();
});

window.wizard.onCoatChange = window.debounce(function (color) {
  coatColor = color;
  updateWizards();
});

var successHandler = function (data) {
  wizards = data;
  updateWizards();
};

window.errorHandler = function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};

window.backend.load(successHandler, window.errorHandler);
