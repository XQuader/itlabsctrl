(function(angular) {
  'use strict';
  angular.module('itLabsControl.teachers')
    .directive('teachersList', ['Teachers', function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/teachers-list.html',
        controller: function($scope, Teachers) {
          Teachers.getTeachers().then(function(response) {
            $scope.teachers = response.data;
          });
        }
      };
    }])
})(window.angular);