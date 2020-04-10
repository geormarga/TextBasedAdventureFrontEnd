(function () {
    'use strict';

    angular
        .module('TBA')
        .controller('RegisterController', RegisterController);

    function RegisterController(alertFactory) {

        var vm = this;

        vm.register = register;
        vm.username = "";
        vm.email = "";
        vm.password = "";
        vm.retypePassword = "";

        function validatePassword(password, retypePassword) {
            return password === retypePassword;
        }

        function validateEmail(email) {
            return "".test();
        }

        function register(ev) {
            if (!validatePassword(vm.password, vm.retypePassword)) {
                alertFactory.alert(ev, "Passwords do not match!");
            } else {
                vm.username = "";
                vm.email = "";
                vm.password = "";
                vm.retypePassword = "";
            }
        }
    }
})();