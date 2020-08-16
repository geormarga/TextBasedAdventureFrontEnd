(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LoadController', LoadController);

    function LoadController($state, alertFactory) {

        var vm = this;

        vm.load = load;

        function load(ev) {
            alertFactory.alert(ev, "Game loaded successfully.");
            $state.go('authorized.play');
        }
    }
})();