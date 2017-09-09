angular.module('TBA')
    .config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/guest");

        // Now set up the states
        $stateProvider
            .state('unauthorized', {
                url: '/guest',
                views: {
                    'sidenav': {
                        templateUrl: 'app/components/unauthorized/Unauthorized.html'
                    },
                    'content': {}
                }
            })
            .state('authorized', {
                url: '/user',
                views: {
                    'sidenav': {
                        templateUrl: 'app/components/authorized/Authorized.html'
                    }
                }
            })
            .state('unauthorized.play', {
                url: '/play',
                views: {
                    'content@': {
                        templateUrl: 'app/components/play/playView.html',
                        controller: 'PlayController',
                        controllerAs: 'playVm'
                    }
                }
            })
            .state('unauthorized.login', {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'app/components/unauthorized/login/loginView.html',
                        controller: 'LoginController',
                        controllerAs: 'loginVm'
                    }
                }
            })
            .state('unauthorized.register', {
                url: '/register',
                views: {
                    'content@': {
                        templateUrl: 'app/components/unauthorized/register/registerView.html',
                        controller: 'RegisterController',
                        controllerAs: 'registerVm'
                    }
                }
            })
            .state('authorized.play', {
                url: '/play',
                views: {
                    'content@': {
                        templateUrl: 'app/components/play/playView.html',
                        controller: 'PlayController',
                        controllerAs: 'playVm'
                    }
                }
            })
            .state('authorized.change-password', {
                url: '/change-password',
                views: {
                    'content@': {
                        templateUrl: 'app/components/authorized/changePassword/changePasswordView.html',
                        controller: 'ChangePasswordController',
                        controllerAs: 'chgpwdVm'
                    }
                }
            })
    });