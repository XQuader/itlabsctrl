(function (angular) {
    'use strict';
    angular.module('itLabsControl')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/index', {
                    'templateUrl': 'src/index.html'
                })
                .when('/teacher/:id', {
                    templateUrl: 'src/teachers/teacher-detail.html',
                    controller: 'TeacherDetailCtrl'
                })
                .otherwise({
                    redirectTo: '/index'
                })
        })
})(window.angular);