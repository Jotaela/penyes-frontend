angular.module('penya')
    .controller('penyaController', function penyaController($stateParams, $scope, getPenyes) {
        $scope.penya = getPenyes.perId($stateParams.id);
    });