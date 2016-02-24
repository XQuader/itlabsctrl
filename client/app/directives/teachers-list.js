(function (angular) {
    'use strict';
    angular.module('itLabsControl.directives')
        .directive('teachersList', function () {
            return {
                scope: {
                    list: '=',
                    onClick: '&',
                    addItem: '&',
                    deleteItem: '&'
                },
                restrict: 'E',
                templateUrl: 'app/directives/teachers-list.html'
            };
        })
})(window.angular);