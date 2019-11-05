'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'home',
    'penyes',
    'infoPenya',
    'novaPenya',
    'missatges',
    'header',
    'chart',
    'primary'
]).
    config([
        '$stateProvider',
        '$urlRouterProvider',
        '$mdThemingProvider',
        '$mdIconProvider',
        '$sceDelegateProvider',
        function ($stateProvider,
            $urlRouterProvider,
            $mdThemingProvider,
            $mdIconProvider,
            $sceDelegateProvider) {

            $stateProvider.state('layout', {
                url: '',
                views: {
                    'header': {
                        templateUrl: './header/header.template.html',
                        controller: 'headerController'
                    },
                    'menu': {
                        templateUrl: './header/menu.template.html',
                        controller: 'headerController'
                    },
                    'primary': {
                        templateUrl: './primary/primary.template.html',
                        controller: 'primaryController'
                    }
                }
            })
            $stateProvider.state('layout.home', {
                url: '/home',
                views: {
                    home: {
                        templateUrl: './home/home.template.html',
                        controller: 'homeController'
                    }
                }
            });
            $stateProvider.state('layout.penyes', {
                url: '/penyes',
                views: {
                    penyes: {
                        templateUrl: './penyes/penyes.template.html',
                        controller: 'penyesController'
                    }
                }
            });
            $stateProvider.state('layout.missatges', {
                url: '/missatges',
                views: {
                    penyes: {
                        templateUrl: './missatges/missatges.template.html',
                        controller: 'missatgesController'
                    }
                }
            });
            $stateProvider.state('layout.chart', {
                url: '/chart',
                views: {
                    penyes: {
                        templateUrl: './chart/chart.template.html',
                        controller: 'chartController'
                    }
                }
            });
            $urlRouterProvider.otherwise('home');


            // ESTILS PROVIDERS
            $mdThemingProvider.theme('temaPrincipal').primaryPalette('blue')
                .accentPalette('teal')
                .warnPalette('red')
                    .backgroundPalette('grey');
            $mdThemingProvider.setDefaultTheme('temaPrincipal');
            $mdIconProvider
                    .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
                    .defaultIconSet('img/icons/sets/social-icons.svg', 24);
}]);
