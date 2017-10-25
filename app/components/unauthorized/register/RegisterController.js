(function () {
    'use strict';

    angular
        .module('TBA')
        .controller('RegisterController', RegisterController);

    function RegisterController($mdDialog) {

        var vm = this;

        vm.register = register;
        vm.username = "";
        vm.email = "";
        vm.password = "";
        vm.retypePassword = "";

        function validate() {
            console.log(vm.password);
            console.log(vm.retypePassword);
            console.log(vm.password === vm.retypePassword);
            return vm.password === vm.retypePassword;
        }

        function register(ev) {
            if (!validate()) {
                modalDialog(ev, "Passwords do not match!");
            }
            vm.username = "";
            vm.email = "";
            vm.password = "";
            vm.retypePassword = "";
        }

        function modalDialog(ev, text) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#main-view')))
                    .clickOutsideToClose(true)
                    .textContent(text)
                    .ok('Okay')
                    .targetEvent(ev)
            );
        }
    }
})();