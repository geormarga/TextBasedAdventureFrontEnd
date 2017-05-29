(function () {
    'use strict';

    angular     
        .module('TBA')
        .controller('RegisterController', RegisterController);

    function RegisterController($scope) {
    
        $scope.register = register;
        $scope.username = "";
        $scope.email = "";
        $scope.password = "";
        $scope.retypePassword = "";
        
        function validate(){
            $scope.email = "";
            return $scope.password === $scope.retypePassword;
        }
        
        function register() {
            $scope.username = "";
            $scope.email = "";
            $scope.password = "";
            $scope.retypePassword = "";
        }}
})();