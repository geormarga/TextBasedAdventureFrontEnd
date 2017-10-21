(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LoginController', LoginController);

    function LoginController(loginService,$state,$mdDialog) {
        var vm = this;

        vm.login = login;

        vm.username = "";
        vm.password = "";

        function login(ev) {
            loginService.login(vm.username, vm.password).then(function (success) {
                // Create cookie at this point and keep it.
                $state.go('authorized.play');
                return success;
            }).catch(function (error) {
                modalDialog(ev);
            });
            vm.username = "";
            vm.password = "";
        }

        function modalDialog(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#main-view')))
                    .clickOutsideToClose(true)
                    .textContent('Wrong username or password')
                    .ok('Okay')
                    .targetEvent(ev)
            );
        }
    }
})();