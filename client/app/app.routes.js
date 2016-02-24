(function (angular) {
    'use strict';
    angular.module('itLabsControl')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/teachers/list.html',
                    controller: "TeachersCtrl"
                })
                .when('/teacher/:id', {
                    templateUrl: 'app/teachers/subjects.html',
                    controller: 'TeacherDetailCtrl'
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