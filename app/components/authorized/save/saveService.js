//Update request with username to save current state for username in persistence
angular
    .module('TBA')
    .service('saveService', saveService);

function saveService(Restangular) {

    let service = {
        save: save
    };
    return service;

    function save(username) {
        let serviceCall = tryToSaveTheGame(username);
        return serviceCall.then(function (result) {
            return result;
        });
    }

    // Actual service call to be replaced here
    function tryToSaveTheGame(username) {
        if (username === "talos") {
            username = "1";
        }
        let postCall = Restangular.oneUrl('posts', 'https://jsonplaceholder.typicode.com/posts/' + username + '').get();
        return postCall.then(
            function (object) {
                return object;
            },
            function (result) {
                console.log("Something went wrong", result.status);
                throw result.status;
            });
    }
}
