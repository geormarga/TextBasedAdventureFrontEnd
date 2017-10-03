(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('PlayController', PlayController);

    function PlayController($rootScope, playService) {

        var vm = this;

        vm.executeCommand = executeCommand;


        //Sets the first description in the textfield.
        vm.history = $rootScope.latestDescription;
        vm.command = "";

        function executeCommand() {
            appendText();
            appendDescription();
        }

        function appendText() {
            vm.history += vm.command + "\n";
            //Post request with command values
            vm.command = "";
        }

        function appendDescription() {
            playService.getDescription.then(function (description) {
                $rootScope.latestDescription = description;
                vm.history += $rootScope.latestDescription;
                document.getElementById('history').scrollTop = document.getElementById('history').scrollHeight;
            });
        };

    }
})();