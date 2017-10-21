(function () {
    'use strict';

    angular
        .module('TBA')
        .controller('SaveController', SaveController);

    function SaveController($mdDialog) {

        var vm = this;

        vm.save = save;

        function save(ev) {
            //saves and on success displays popup
            //alert('Game saved successfully');
            modalDialog(ev);
        }


        function modalDialog(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#main-view')))
                    .clickOutsideToClose(true)
                    .textContent('Game saved successfully.')
                    .ok('Okay')
                    .targetEvent(ev)
            );
        }
    }

})();