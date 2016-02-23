(function(angular) {
  'use strict';
  angular.module('itLabsControl.teachers')
    .service('Teachers', ['$http', function($http) {
      var teachers = null;

      this.getTeachers = getTeachers;
      this.getTeacherSubjects = getTeacherSubjects;
      this.deleteTeacher = deleteTeacher;
      this.addTeacher = addTeacher;

      function getTeachers() {
        teachers = $http.get('api/teachers');
        return teachers;
      }

      function getTeacherSubjects(teacherId) {
        return $http.get('api/teacher/' + teacherId);
      }

      function deleteTeacher(teacherId) {
        return $http.delete('api/teacher/' + teacherId);
      }

      function addTeacher(newTeacher){
        return $http.post('api/teachers', newTeacher);
      }

    }])
})(window.angular);

