(function () {
    'use strict';

    angular
        .module('TBA')
        .controller('SaveController', SaveController);

    function SaveController() {

        var vm = this;

        vm.save = save;

        function save() {
            //saves and on success displays popup
            alert('Game saved successfully');
        }
    }

})();