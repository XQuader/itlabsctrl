(function (angular) {
    'use strict';
    angular.module('itLabsControl.editor')
        .controller('EditorCtrl', ['$scope', '$timeout', 'Upload', function ($scope, $timeout, Upload) {
            $scope.upload = upload;

            function upload(file) {
                file.upload = Upload.upload({
                    url: '/api/upload',
                    data: file
                });

                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    // Math.min is to fix IE which reports 200% sometimes
                    file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }
        }])
})(window.angular);

