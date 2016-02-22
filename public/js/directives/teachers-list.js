(function(angular) {
  'use strict';
  angular.module('itLabsControl.directives')
    .directive('teachersList', function() {
      return {
        scope: {
          list: '=',
          click: '&',
          add:  '&',
          del:  '&'
        },
        restrict: 'E',
        templateUrl: 'src/teachers/teachers-list.html',
      };
    })
})(window.angular);