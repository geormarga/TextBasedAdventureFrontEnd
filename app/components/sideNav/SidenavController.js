(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('SidenavController', SidenavController);

    function SidenavController($scope, $mdSidenav) {

        $scope.isSidenavOpen = false;
        $scope.openLeftMenu = openLeftMenu;

        function openLeftMenu() {
            $mdSidenav('left').toggle();
        };
    }
})();