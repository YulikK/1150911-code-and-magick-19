'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var form = setup.querySelector('.setup-wizard-form');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  setupOpen.addEventListener('click', function () {
    // window.createSimilarWizards();
    openPopup();
    window.afterOpenPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
    window.afterClosePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.getStartXY();
  };

  var closePopup = function () {
    window.setStartXY();
    setup.classList.add('hidden');
    setup.querySelector('.setup-similar').classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };


  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, window.errorHandler);
    evt.preventDefault();
  });
})();
