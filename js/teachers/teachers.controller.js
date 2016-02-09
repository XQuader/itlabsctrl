(function(angular) {
  'use strict';
  angular.module('itLabsControl.teachers')
    .controller('TeachersController', ['$scope', 'Teachers', function($scope, Teachers) {
      Teachers.getTeachers().then(function(response) {
        $scope.teachers = response.data;
      });
    }])
})(window.angular);

