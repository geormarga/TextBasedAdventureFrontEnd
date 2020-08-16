angular
    .module('TBA')
    .factory('alertFactory', alertFactory);

function alertFactory($mdDialog) {
    var service = {
        alert: alert
    };
    return service;

    function alert(ev, text) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#main-view')))
                .clickOutsideToClose(true)
                .textContent(text)
                .ok('Okay')
                .targetEvent(ev)
        );
    }
}
