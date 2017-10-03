(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LoginController', LoginController);

    function LoginController() {
        var vm = this;

        vm.login = login;

        vm.username = "";
        vm.password = "";

        function login() {
            vm.username = "";
            vm.password = "";
        }
    }
})();