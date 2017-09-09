(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LoadController', LoadController);

    function LoadController($scope, $state) {

        $scope.load = load;

        function load() {
            alert('Game loaded successfully');
            $state.go('authorized.play');
        }
    }

})();