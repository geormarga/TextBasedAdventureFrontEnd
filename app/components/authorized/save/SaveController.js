(function () {
    'use strict';

    angular
        .module('TBA')
        .controller('SaveController', SaveController);

    function SaveController($scope) {

        $scope.save = save;

        function save() {
            //saves and on success displays popup
            alert('Game saved successfully');
        }
    }

})();