(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('SidenavController', SidenavController);

    function SidenavController($scope, $mdSidenav) {

        $scope.isSidenavOpen = false;
        $scope.toggleMenu = toggleMenu;

        function toggleMenu() {
            $mdSidenav('left').toggle();
        }
    }
})();