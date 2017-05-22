(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('PlayController', PlayController);

    PlayController.$inject = ['$scope'];

    function PlayController() {
        var vm = this;
        vm.executeCommand = executeCommand();


        function executeCommand() {
            alert('clicked a button');
        }
    }

})();