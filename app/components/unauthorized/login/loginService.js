angular
    .module('TBA')
    .service('loginService', loginService);

function loginService(Restangular) {

    let service = {
        login: login
    };
    return service;

    function login(username, password) {
        let object = '{'
            + '"username" : "' + username + '",'
            + '"password"  : "' + password + '"'
            + '}';
        let serviceCall = checkIfCredentialsExist(username, password, object);
        return serviceCall.then(function (result) {
            return result;
        });
    }

    // Actual service call to be replaced here
    function checkIfCredentialsExist(username, password, object) {
        if (username === "talos" && password === "123456aA!" || username === "no_access" && password === "123456aA!") {
            object = "";
        }
        let postCall = Restangular.oneUrl('posts', 'https://jsonplaceholder.typicode.com/posts').post(object);
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
