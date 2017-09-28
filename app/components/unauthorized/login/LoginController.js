(function () {
    'use strict';
    angular     
        .module('TBA')
        .controller('LoginController', LoginController);

    function LoginController($scope) {
    
        $scope.login = login;
        $scope.username = "";
        $scope.password = "";
        
        
        function login() {
            $scope.username = "";
            $scope.password = "";
        }}

})();