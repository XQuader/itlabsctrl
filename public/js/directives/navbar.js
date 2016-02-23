(function (angular) {
    'use strict';
    angular.module('itLabsControl.directives')
        .directive('navbar', function () {
            return {
                restrict: 'E',
                templateUrl: 'src/navbar.html',
                controller: ['$scope', '$location', function ($scope, $location) {
                    $scope.isActive = function (page) {
                        return $location.path() === page;
                    }
                }]
            };
        })
})(window.angular);