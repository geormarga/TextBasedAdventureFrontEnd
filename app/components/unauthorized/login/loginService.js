angular
    .module('TBA')
    .service('loginService', loginService);

function loginService(Restangular) {

    var service = {
        login: login
    };
    return service;

    function login(username, password) {
        var object = '{'
            + '"username" : "' + username + '",'
            + '"password"  : "' + password + '"'
            + '}';
        var serviceCall = checkIfCredentialsExist(username, password, object);
        return serviceCall.then(function (result) {
            return result;
        });
    }

    // Actual service call to be replaced here
    function checkIfCredentialsExist(username, password, object) {
        if (username === "talos" && password === "123456aA!") {
            object = "";
        }
        var postCall = Restangular.oneUrl('posts', 'https://jsonplaceholder.typicode.com/posts').post(object);
        return postCall.then(function (result) {
            return result;
        });
    }
}
