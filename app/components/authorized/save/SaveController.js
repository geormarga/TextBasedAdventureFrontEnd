(function () {
    'use strict';

    angular
        .module('TBA')
        .controller('SaveController', SaveController);

    function SaveController(alertFactory) {

        var vm = this;

        vm.save = save;

        function save(ev) {
            //saves and on success displays popup
            //alert('Game saved successfully');
            alertFactory.alert(ev, "Game saved successfully.");
        }
    }
})();