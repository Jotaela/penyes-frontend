angular.module('header')
    .controller('headerController', function headerController($rootScope){
        (function () {
            'use strict';

            $rootScope.$on('$routeChangeSuccess', function (event, current) {
                $scope.currentLink = getCurrentLinkFromRoute(current);
            });
        });
    });