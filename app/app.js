'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ui.Route',
    'home'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $utlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: './home/home.template.html',
        controller: 'homeController'

    });
    $urlRouterProvider.otherwise('/home');
}]);
