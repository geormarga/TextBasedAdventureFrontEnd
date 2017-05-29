(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('PlayController', PlayController);

    function PlayController($scope) {
        
        $scope.executeCommand = executeCommand;
        $scope.history = "";
        $scope.command = "";
        
        function executeCommand(){
            appendText();
        }
        
        function appendText() {
            $scope.history += $scope.command + "\n" ;
            $scope.command = "";
            document.getElementById('history').scrollTop = document.getElementById('history').scrollHeight;
        }}
})();