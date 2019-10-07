angular.module('penya')
    .controller('penyaController', function penyaController($stateParams, $scope) {
        $scope.nom = $stateParams.nom;
    });