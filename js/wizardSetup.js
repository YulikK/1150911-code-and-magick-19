'use strict';
window.WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
window.WIZARD_SERNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
window.WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
window.WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
window.WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

window.createSimilarWizards = function () {
  var wizards = [];

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  similarListElement.innerHTML = '';

  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: window.WIZARD_NAMES[Math.floor(Math.random() * window.WIZARD_NAMES.length)] + ' ' + window.WIZARD_SERNAMES[Math.floor(Math.random() * window.WIZARD_SERNAMES.length)],
      coatColor: window.WIZARD_COAT[Math.floor(Math.random() * window.WIZARD_COAT.length)],
      eyesColor: window.WIZARD_EYES[Math.floor(Math.random() * window.WIZARD_EYES.length)]
    };
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};
