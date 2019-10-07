'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'home',
    'penyes',
    'penya'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: './home/home.template.html',
        controller: 'homeController'

    });
    $stateProvider.state('penyes', {
        url: '/penyes',
        templateUrl: './penyes/penyes.template.html',
        controller: 'penyesController'

    });
    $stateProvider.state('penya', {
        url: '/penyes/:nom',
        templateUrl: './penya/penya.template.html',
        controller: 'penyaController'

    });
    $urlRouterProvider.otherwise('/home');
}]);
