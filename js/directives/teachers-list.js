(function(angular) {
  'use strict';
  angular.module('itLabsControl.directives')
    .directive('teachersList', function() {
      return {
        scope: {
          list: '='
        },
        restrict: 'E',
        templateUrl: 'templates/teachers-list.html',
      };
    })
})(window.angular);