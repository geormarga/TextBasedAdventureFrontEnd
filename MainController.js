(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('MainController', MainController);

    function MainController($scope, $rootScope, $mdSidenav, Restangular) {

        $scope.isSidenavOpen = false;
        $scope.toggleMenu = toggleMenu;

        $rootScope.latestDescription = "this is the first text ever \n";

        function setLatestDescription() {
            var responseList = Restangular.oneUrl('posts', 'https://jsonplaceholder.typicode.com/posts').get();
            responseList.then(function (list) {
                $rootScope.latestDescription = list[0].title + "\n";
            });
        }

        function toggleMenu() {
            $mdSidenav('left').toggle();
        }
    }
})();