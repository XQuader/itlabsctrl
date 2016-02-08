(function(angular) {
  'use strict';
  angular.module('ItLabsControl', [])
    .controller('TeachersController', ['$scope', '$http', function($scope, $http) {
      $http.get('api/teachers.json').then(function(response) {
        $scope.teachers = response.data;
      });
    }]);

})(window.angular);