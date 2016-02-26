(function (angular) {
    'use strict';

    angular.module('itLabsControl')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/teachers/list/list.html',
                    controller: 'TeachersListCtrl'
                })
                .when('/teacher/:id', {
                    templateUrl: 'app/teachers/subjects/subjects.html',
                    controller: 'TeacherSubjectsCtrl'
                })
                .when('/editor', {
                    templateUrl: 'app/editor/editor.html',
                    controller: 'EditorCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                })
        })
})(window.angular);