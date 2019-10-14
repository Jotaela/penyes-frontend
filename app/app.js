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
    'chart'
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

        $stateProvider.state('home', {
            url: '/home',

            views: {
                'primary': {
                    templateUrl: './home/home.template.html',
                    controller: 'homeController'
                },
                'header': {
                    templateUrl: './header/header.template.html',
                    controller: 'headerController'
                },
                'menu': {
                    templateUrl: './header/menu.template.html',
                    controller: 'headerController'
                }
            }
        });
        $stateProvider.state('penyes', {
            url: '/penyes',
            views: {
                'primary': {
                    templateUrl: './penyes/penyes.template.html',
                    controller: 'penyesController'
                },
                'header': {
                    templateUrl: './header/header.template.html',
                    controller: 'headerController'
                }

            }
        

        });
        $stateProvider.state('missatges', {
            url: '/missatges',
            views: {
                'primary': {
                    templateUrl: './missatges/missatges.template.html',
                    controller: 'missatgesController'
                },
                'header': {
                    templateUrl: './header/header.template.html',
                    controller: 'headerController'
                }

            }
        

        });
        $stateProvider.state('chart', {
            url: '/chart',
            views: {
                'primary': {
                    templateUrl: './chart/chart.template.html',
                    controller: 'chartController'      
                },
                'header': {
                    templateUrl: './header/header.template.html',
                    controller: 'headerController'
                }

            }
                 
        });

        $urlRouterProvider.otherwise('/home');

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
