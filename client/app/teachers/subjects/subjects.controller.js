(function (angular) {
    'use strict';

    angular.module('itLabsControl.teachers')
        .controller('TeacherSubjectsCtrl', ['$scope', '$routeParams', 'Teachers', function ($scope, $routeParams, Teachers) {
            Teachers.getTeacherSubjects($routeParams.id).then(function (response) {
                $scope.subjects = response.data;
            });
        }]);
})(window.angular);

