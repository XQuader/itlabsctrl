(function(angular) {
  'use strict';
  angular.module('itLabsControl')
    .config(function($routeProvider) {
      $routeProvider
        .when('/index', {
          'templateUrl':  'templates/index.html'
        })
        .when('/teacher/:id', {
          templateUrl: 'templates/teachers/teacher-detail.html',
          controller: 'TeacherDetailCtrl'
        })
        .otherwise({
          redirectTo: '/index'
        })
    })
})(window.angular);