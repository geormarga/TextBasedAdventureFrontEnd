(function () {
    'use strict';

    angular
        .module('TBA')
        .controller('SaveController', SaveController);

    function SaveController(savedService, $window, $state, alertFactory) {

        var vm = this;

        vm.save = save;
        vm.username = $window.sessionStorage.user;

        function save(ev) {
            //saves and on success displays popup
            loadService.save(vm.username).then(function (success) {
                // Create cookie at this point and keep it.
                alertFactory.alert(ev, "Game saved successfully.");
                $state.go('authorized.play');
                return success;
            }).catch(function (error) {
                alertFactory.alert(ev, "Something went wrong while trying to save the game!");
            });
        }
    }
})();