(function() {
  'use strict';

  angular
  .module('formHelp', [])
  .directive('formHelpButton', formHelpButton);

  formHelpButton.$inject = ['$rootScope']; 
  function formHelpButton($rootScope){
    var directive = {
      require: '^form',
      restrict : 'E',
      scope : {
      },
      link : link,
      template: '<button type="submit">wow</button>'
    };
    return directive;

    function link(scope, element, attrs, form){
     var formElement = getElement(form.$name);

     scope.isInvalidForm = isInvalidForm;
     scope.showErrors = showErrors;

     formElement.bind('submit', function(event){
       showErrors();
       if (true) {
        event.stopImmediatePropagation();  
       };
     });

     function showErrors(){
       var err = {};
       for (err in form.$error){
         form.$error[err].forEach(function(elementError){
           var element = getElement(elementError.$name);
           element.addClass('red');
         });
       };
     };

     function isInvalidForm(){
       return form.$invalid;
     };

     function getElement(selector){
      return angular.element(document.getElementsByName(selector));
     };

    };
  };
})();