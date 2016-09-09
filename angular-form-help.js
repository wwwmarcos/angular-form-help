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
      scope: {
          btnClass : '@'
        , label : '@'
      },
      link: link,
      template: '<button type="submit" data-ng-class="btnClass">{{label}}</button>'
    };
    return directive;

    function link(scope, element, attrs, form) {
      var formElement = getElement(form.$name);

      formElement.bind('submit', function(event) {
        if (isInvalidForm()) {
          event.stopImmediatePropagation();
          setDirty(form.$error);
          scope.$parent.$digest()
          return;
        };
      });

      function setDirty(errors) {
        for (var err in errors) {
          errors[err].forEach(function(elementError, index) {
            focusInput(elementError, index);
            elementError.$setDirty();
            addClass(elementError.$name);
          });
        };
      };

      function focusInput(elementError, index){
        if (isNgForm(elementError.$error)){
          return setDirty(elementError.$error);
        };
        if (index === 0){
          getElement(elementError.$name)[0].focus();
        };
      };

      function addClass(elementName) {
        getElement(elementName).addClass('wobble');
      };

      function isInvalidForm() {
        return form.$invalid;
      };

      function isNgForm(errors){
        for (var err in errors) {
          if (angular.isArray(errors[err])){
            return true
          };
        };
        return false
      };

      function getElement(selector) {
        return angular.element(document.getElementsByName(selector));
      };

    };
  };
})();