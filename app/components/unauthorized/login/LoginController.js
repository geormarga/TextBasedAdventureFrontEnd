(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LoginController', LoginController);

    function LoginController(loginService,$state) {
        var vm = this;

        vm.login = login;

        vm.username = "";
        vm.password = "";

        function login() {
            loginService.login(vm.username, vm.password).then(function (success) {
                // Create cookie at this point and keep it.
                $state.go('authorized.play');
                return success;
            }).catch(function (error) {
                alert("wrong username or password" + error.status);
            });
            vm.username = "";
            vm.password = "";
        }
    }
})();