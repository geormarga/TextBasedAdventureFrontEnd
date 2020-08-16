(function () {
    'use strict';
    angular
        .module('TBA')
        .controller('LoadController', LoadController);

    function LoadController(loadService, $window, $state, alertFactory) {
        let vm = this;

        vm.load = load;
        vm.username = $window.sessionStorage.user;

        function load(ev) {
            console.log(vm.username);
            loadService.load(vm.username).then(function (success) {
                // Create cookie at this point and keep it.
                alertFactory.alert(ev, "Game loaded successfully.");
                $state.go('authorized.play');
                return success;
            }).catch(function (error) {
                alertFactory.alert(ev, "No save file available!");
            });
        }
    }
})();