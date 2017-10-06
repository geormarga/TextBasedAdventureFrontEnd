angular
    .module('TBA')
    .service('playService', playService);

function playService(Restangular) {

    var service = {
        getDescription: getDescription
    };
    return service;

    function getDescription() {
        var responseList = Restangular.oneUrl('posts', 'https://jsonplaceholder.typicode.com/posts').get();
        return responseList.then(function (list) {
            return list[0].title;
        });
    }
}
