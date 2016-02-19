(function(angular) {
  'use strict';
  angular.module('itLabsControl.teachers')
    .service('Teachers', ['$http', function($http) {
      var promise = null;
      return {
        getTeachers: function() {
          if (promise)
            return promise;

          promise = $http.get('api/teachers');
          return promise;
        }
      };
    }])
})(window.angular);

