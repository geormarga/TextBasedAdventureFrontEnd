(function () {
    'use strict';

    angular     
        .module('TBA')
        .controller('RegisterController', RegisterController);

    function RegisterController() {

        var vm = this;

        vm.register = register;
        vm.username = "";
        vm.email = "";
        vm.password = "";
        vm.retypePassword = "";
        
        function validate(){
            vm.email = "";
            return vm.password === vm.retypePassword;
        }
        
        function register() {
            vm.username = "";
            vm.email = "";
            vm.password = "";
            vm.retypePassword = "";
        }}
})();