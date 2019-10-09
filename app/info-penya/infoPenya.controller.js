angular.module('infoPenya')
    .controller('infoPenyaController', function infoPenyaController($scope, penya) {
        $scope.penya = penya;
    });