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
    'header'
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
    //$stateProvider.state('penyes.penya', {
    //    url: '/:id',
    //    templateUrl: './penya/penya.template.html',
    //    controller: 'penyaController'
    //
    //    });

    $urlRouterProvider.otherwise('/home');

    // ESTILS PROVIDERS
    $mdThemingProvider.theme('temaPrincipal').primaryPalette('blue')
        .accentPalette('teal')
        .warnPalette('red')
            .backgroundPalette('grey');
    $mdThemingProvider.setDefaultTheme('temaPrincipal');
    $mdIconProvider
            .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);
}]);
