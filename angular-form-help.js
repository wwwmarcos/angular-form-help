(function() {
  'use strict';

  angular
    .module('formHelp', [])
    .directive('formHelpButton', formHelpButton);

  formHelpButton.$inject = [];
  function formHelpButton() {
    var directive = {
      require: '^form',
      restrict: 'E',
      scope: {},
      link: link,
      template: '<button type="submit">wow</button>'
    };
    return directive;

    function link(scope, element, attrs, form) {
      var formElement = getElement(form.$name);

      formElement.bind('submit', function(event) {
        if (isInvalidForm()) {
          event.stopImmediatePropagation();
          setDirty();
          scope.$parent.$digest()
          return;
        };
      });

      function setDirty() {
        for (var err in form.$error) {
          form.$error[err].forEach(function(elementError, index) {
            focusInput(elementError, index);
            elementError.$setDirty();
            addClass(elementError.$name);
          });
        };
      };

      function focusInput(elementError, index){
        if (index === 0){
          getElement(elementError.$name)[0].focus()
        };
      };

      function addClass(elementName) {
        getElement(elementName).addClass('wobble');
      };

      function isInvalidForm() {
        return form.$invalid;
      };

      function getElement(selector) {
        return angular.element(document.getElementsByName(selector));
      };

    };
  };
})();