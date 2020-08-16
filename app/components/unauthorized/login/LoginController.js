(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LoginController', LoginController);

    function LoginController(loginService, $window, $state, alertFactory) {
        let vm = this;

        vm.login = login;
        resetFields();

        function login(ev) {
            loginService.login(vm.username, vm.password).then(function (success) {
                // Create cookie at this point and keep it.
                $window.sessionStorage.setItem("user", vm.username);
                $state.go('authorized.play');
                resetFields();
                return success;
            }).catch(function (error) {
                alertFactory.alert(ev, "Wrong username or password!");
                resetFields();
            });
        }

        function resetFields() {
            vm.username = "";
            vm.password = "";
        }
    }
})();