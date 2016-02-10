(function(angular) {
  'use strict';
  angular.module('itLabsControl.directives')
    .directive('teachersList', function() {
      return {
        scope: {
          list: '=',
          click: '='
        },
        restrict: 'E',
        templateUrl: 'templates/teachers/teachers-list.html',
      };
    })
})(window.angular);