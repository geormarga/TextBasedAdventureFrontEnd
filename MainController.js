(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('MainController', MainController);

    function MainController($scope, $mdSidenav) {

        $scope.isSidenavOpen = false;
        $scope.toggleMenu = toggleMenu;

        function toggleMenu() {
            $mdSidenav('left').toggle();
        }
    }
})();