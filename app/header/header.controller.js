angular.module('header')
    .controller('headerController', function headerController($rootScope, $scope){
        (function () {
            'use strict';

            $rootScope.$on('$routeChangeSuccess', function (event, current) {
                $scope.currentLink = getCurrentLinkFromRoute(current);
            });
        });
    });