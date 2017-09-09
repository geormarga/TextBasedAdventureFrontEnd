(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LogoutController', LogoutController);

    function LogoutController($scope,$state) {

        $scope.logout = logout;


        function logout() {
            //clears cookies session etc
            //and redirects to unauthorized
            $state.go('unauthorized');
        }

    }

})();