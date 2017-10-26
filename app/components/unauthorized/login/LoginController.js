(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LoginController', LoginController);

    function LoginController(loginService, $state, alertFactory) {
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
                alertFactory.alert(ev, "Wrong username or password!");
            });
            vm.username = "";
            vm.password = "";
        }
    }
})();