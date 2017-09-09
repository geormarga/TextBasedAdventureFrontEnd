(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('PlayController', PlayController);

    function PlayController($scope,Restangular) {

        $scope.executeCommand = executeCommand;
        $scope.history = "";
        $scope.command = "";


        Restangular.configuration.setBaseUrl = "https://jsonplaceholder.typicode.com";

        function executeCommand() {

            appendText();
        }

        function appendText() {
            $scope.history += $scope.command + "\n";
            $scope.command = "";
            var talos =Restangular.one('accounts').get();
            talos.getList().then(function(talos) {
                $scope.history += talos;
            });
            console.log(talos);
            $scope.history += $scope.accounts[0];
            document.getElementById('history').scrollTop = document.getElementById('history').scrollHeight;
        }
    }
})();