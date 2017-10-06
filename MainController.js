(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('MainController', MainController);

    function MainController($mdSidenav) {
        var vm = this;

        vm.isSidenavOpen = false;
        vm.toggleMenu = toggleMenu;

        function toggleMenu() {
            $mdSidenav('left').toggle();
        }
    }
})();