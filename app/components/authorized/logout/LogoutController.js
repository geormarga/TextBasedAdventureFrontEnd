(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LogoutController', LogoutController);

    function LogoutController($state) {

        var vm = this;

        vm.logout = logout;


        function logout() {
            //clears cookies session etc
            //and redirects to unauthorized
            $state.go('unauthorized');
        }

    }

})();