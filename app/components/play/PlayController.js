(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('PlayController', PlayController);

    function PlayController(playService) {

        var vm = this;
        vm.history = "";
        vm.command = "";
        vm.latestDescription;

        vm.executeCommand = executeCommand;

        InitializeHistoryTextarea();

        function executeCommand() {
            appendText(vm.command);
            //Check if the command is either undefined, whitespace or empty string
            if (validateCommandForWhitespace(vm.command)) {
                getDescription().then(function (text) {
                    vm.latestDescription = text;
                    appendText(vm.latestDescription);
                });
            }
            //Post request with command values
            vm.command = "";
        }

        function appendText(text) {
            vm.history += text + "\n";
            document.getElementById('history').scrollTop = document.getElementById('history').scrollHeight;
        }

        function getDescription() {
            return playService.getDescription().then(function (description) {
                return vm.latestDescription = description;
            });
        }

        //Sets the first description in the textfield.
        function InitializeHistoryTextarea() {
            getDescription().then(function (text) {
                vm.latestDescription = text;
                appendText(vm.latestDescription);
            });
        }

        function validateCommandForWhitespace(command) {
            return command && command.trim();
        }
    }
})();