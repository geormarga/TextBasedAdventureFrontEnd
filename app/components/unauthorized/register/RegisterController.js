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

        function validate() {
            console.log(vm.password);
            console.log(vm.retypePassword);
            console.log(vm.password === vm.retypePassword);
            return vm.password === vm.retypePassword;
        }

        function register(ev) {
            if (!validate()) {
                alertFactory.alert(ev, "Passwords do not match!");
            }
            vm.username = "";
            vm.email = "";
            vm.password = "";
            vm.retypePassword = "";
        }
    }
})();