(function(angular) {
  'use strict';
  angular.module('itLabsControl.teachers')
    .controller('TeachersCtrl', ['$scope', '$location', 'Teachers', function($scope, $location, Teachers) {
      $scope.showTeacher = function(index) {
        $location.path('/teacher/' + index);
      };
      Teachers.getTeachers().then(function(response) {
        $scope.teachers = response.data;
      });
    }])

    .controller('TeacherDetailCtrl', ['$scope', '$routeParams', 'Teachers', function($scope, $routeParams, Teachers) {
      $scope.teacherId = $routeParams.id;
      Teachers.getTeachers().then(function(response) {
        $scope.teacher = response.data[$scope.teacherId];
      });
    }]);
})(window.angular);

