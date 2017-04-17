angular.module('TBA')
    .config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/");

        // Now set up the states
        $stateProvider
            .state('unauthorized', {
                url: '/',
                templateUrl: 'app/components/unauthorized/tasks/tasksView.html',
                controller: 'TasksController',
                controllerAs: 'tasksVm'
            })
            .state('sidenav', {
                url: 'sidenav',
                templateUrl: 'app/components/sideNav/sideNav.html',
                controller: 'SidenavController',
                controllerAs: 'sidenavVm'
            })
            .state('unauthorized.play', {
                url: 'play',
                templateUrl: 'app/components/play/playView.html',
                controller: 'PlayController',
                controllerAs: 'playVm'
            })
            .state('unauthorized.login', {
                url: 'login',
                templateUrl: 'app/components/unauthorized/login/loginView.html',
                controller: 'LoginController',
                controllerAs: 'loginVm'
            })
            .state('unauthorized.register', {
                url: 'register',
                templateUrl: 'app/components/unauthorized/register/registerView.html',
                controller: 'RegisterController',
                controllerAs: 'registerVm'
            })
    });