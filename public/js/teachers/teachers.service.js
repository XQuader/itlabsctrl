(function(angular) {
  'use strict';
  angular.module('itLabsControl.teachers')
    .service('Teachers', ['$http', function($http) {
      var teachers = null;

      this.getTeachers = getTeachers;
      this.getTeacherSubjects = getTeacherSubjects;

      function getTeachers() {
        if (teachers)
          return teachers;
        teachers = $http.get('api/teachers');
        return teachers;
      };

      function getTeacherSubjects(teacherId) {
        return $http.get('api/teacher/' + teacherId);
      }
    }])
})(window.angular);

