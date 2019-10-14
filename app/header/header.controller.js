angular.module('header')
    .controller('headerController', function headerController($rootScope, $scope, $mdSidenav){
        (function () {
            'use strict';

            $rootScope.$on('$routeChangeSuccess', function (event, current) {
                $scope.currentLink = getCurrentLinkFromRoute(current);
            });
        });

        $scope.toggleMenu = buildToggler('left');

        function buildToggler(componentId) {
            return function () {
                $mdSidenav(componentId).toggle();
            };
        }
       
    });