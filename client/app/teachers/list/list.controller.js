(function (angular) {
    'use strict';

    angular.module('itLabsControl.teachers')
        .controller('TeachersListCtrl', ['$scope', '$location', 'Teachers', function ($scope, $location, Teachers) {
            $scope.getSubjects = getSubjects;
            $scope.addTeacher = addTeacher;
            $scope.deleteTeacher = deleteTeacher;

            update();

            function getSubjects(id) {
                $location.path('/teacher/' + id);
            }

            function addTeacher(newTeacher) {
                Teachers.addTeacher(newTeacher);
                update();
            }

            function deleteTeacher(id) {
                Teachers.deleteTeacher(id);
                update();
            }

            function update() {
                Teachers.getTeachers().then(function (response) {
                    $scope.teachers = response.data;
                });
            }
        }])
})(window.angular);

