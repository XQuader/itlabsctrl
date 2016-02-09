(function(angular) {
  'use strict';
  angular.module('ItLabsControl', [])
    .service('Teachers', ['$http', function($http) {
      return {
        getTeachers: function() {
          return $http.get('api/teachers.json');
        }
      };
    }])
    .controller('TeachersController', ['$scope', 'Teachers', function($scope, Teachers) {
      Teachers.getTeachers().then(function(response) {
        $scope.teachers = response.data;
      });
    }])
    .directive('teachersList', function() {
      return {
        restrict: 'E',
        templateUrl: 'views/teachers-list.html',
        controller: 'TeachersController'
      };
    })

})(window.angular);