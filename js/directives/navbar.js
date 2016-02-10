(function(angular) {
  'use strict';
  angular.module('itLabsControl.directives')
    .directive('navbar', function() {
      return {
        restrict: 'E',
        templateUrl: 'src/navbar.html'
      };
    })
})(window.angular);