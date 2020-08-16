//Get latest state with get request that has username as param.
angular
    .module('TBA')
    .service('loadService', loadService);

function loadService(Restangular) {

    let service = {
        load: load
    };
    return service;

    function load(username) {
        let serviceCall = checkIfSaveExists(username);
        return serviceCall.then(function (result) {
            return result;
        });
    }

    // Actual service call to be replaced here
    function checkIfSaveExists(username) {
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
