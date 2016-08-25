(function() {
  'use strict';
    angular
    .module('app', ['formHelp', 'ngMessages'])
    .controller('IndexController', IndexController);

    IndexController.$inject = [];
    function IndexController(){
      var vm = this;
      vm.submit = submit;

      function submit(){
        alert('Submited');
      };
  };
})();