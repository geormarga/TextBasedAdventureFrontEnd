(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LoadController', LoadController);

    function LoadController($state) {

        var vm = this;

        vm.load = load;

        function load() {
            alert('Game loaded successfully');
            $state.go('authorized.play');
        }
    }

})();