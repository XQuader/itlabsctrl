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
      Teachers.getTeacherSubjects($routeParams.id).then(function(response) {
        $scope.subjects = response.data;
      });
    }]);
})(window.angular);

