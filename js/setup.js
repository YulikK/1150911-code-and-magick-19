'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SERNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var wizards = [];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: WIZARD_NAMES[Math.floor(Math.random() * 8)] + ' ' + WIZARD_SERNAMES[Math.floor(Math.random() * 8)],
    coatColor: WIZARD_COAT[Math.floor(Math.random() * 6)],
    eyesColor: WIZARD_EYES[Math.floor(Math.random() * 5)]
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

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
// setup.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && evt.target && !evt.target.matches('input[type="text"]')) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  wizardCoat.removeEventListener('click', onCoatClick);
  wizardEyes.removeEventListener('click', onEyesClick);
  wizardFireball.removeEventListener('click', onFireballClick);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var setupCoatColor = document.querySelector('input[name="coat-color"]');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupEyesColor = document.querySelector('input[name="eyes-color"]');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var setupFireballColor = document.querySelector('input[name="fireball-color"]');

var onCoatClick = function () {
  wizardCoat.style.fill = WIZARD_COAT[Math.floor(Math.random() * 6)];
  setupCoatColor.value = wizardCoat.style.fill;
};

var onEyesClick = function () {
  wizardEyes.style.fill = WIZARD_EYES[Math.floor(Math.random() * 5)];
  setupEyesColor.value = wizardEyes.style.fill;
};

var onFireballClick = function () {
  var newColor = WIZARD_FIREBALL[Math.floor(Math.random() * 5)];
  wizardFireball.style.background = newColor;
  setupFireballColor.value = newColor;
};

wizardCoat.addEventListener('click', onCoatClick);
wizardEyes.addEventListener('click', onEyesClick);
wizardFireball.addEventListener('click', onFireballClick);


