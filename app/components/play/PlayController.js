(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('PlayController', PlayController);

    function PlayController($scope,$rootScope , Restangular) {

        $scope.executeCommand = executeCommand;

        //Sets the first description in the textfield.
        $scope.history = $rootScope.latestDescription;
        $scope.command = "";


        function executeCommand() {
            appendText();
            getDescription();
        }

        function appendText() {
            $scope.history += $scope.command + "\n";
            //Post request with command values
            $scope.command = "";
        }

        function getDescription() {
            var responseList = Restangular.oneUrl('posts', 'https://jsonplaceholder.typicode.com/posts').get();

            responseList.then(function (list) {
                $rootScope.latestDescription = list[0].title + "\n";
                $scope.history +=  $rootScope.latestDescription;
                document.getElementById('history').scrollTop = document.getElementById('history').scrollHeight;
            });
        }
    }
})();