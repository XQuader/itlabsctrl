(function(angular) {
  'use strict';
  angular.module('itLabsControl.teachers')
    .service('Teachers', ['$http', function($http) {
      return {
        getTeachers: function() {
          return $http.get('api/teachers.json');
        }
      };
    }])
})(window.angular);