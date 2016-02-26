(function (angular) {
    'use strict';
    angular.module('itLabsControl.editor')
        .controller('EditorCtrl', ['$scope', '$timeout', '$http', 'Upload', function ($scope, $timeout, $http, Upload) {
            $scope.upload = upload;
            $scope.aceLoaded = aceLoaded;

            function upload(file, type) {
                $scope.errorMsg = null;
                file.result = null;
                file.progress = null;

                file.upload = Upload.upload({
                    url: '/api/upload',
                    data: {
                        id: 1,
                        mode: "cpp",
                    },
                    file: file[type]
                });

                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = 'Error ' + response.status;
                }, function (evt) {
                    // Math.min is to fix IE which reports 200% sometimes
                    file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }

            function aceLoaded(_editor) {
                // Editor part
                var _session = _editor.getSession();

                // Options
                _session.setUndoManager(new ace.UndoManager());
                _session.setMode('ace/mode/c_cpp');
                _editor.setOptions({
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: false
                });
                _editor.$blockScrolling = Infinity;
            }

        }])
})(window.angular);

