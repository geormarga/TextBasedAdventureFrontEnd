(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LoadController', LoadController);

    function LoadController($state,$mdDialog) {

        var vm = this;

        vm.load = load;

        function load(ev) {
            modalDialog(ev);
            $state.go('authorized.play');
        }

        function modalDialog(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#main-view')))
                    .clickOutsideToClose(true)
                    .textContent('Game loaded successfully.')
                    .ok('Okay')
                    .targetEvent(ev)
            );
        };
    }

})();