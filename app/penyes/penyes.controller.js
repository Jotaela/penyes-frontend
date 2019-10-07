angular.module('penyes')
    .controller('penyesController', function penyesController($scope, getPenyes) {
        $scope.penyes = getPenyes.all();
    });