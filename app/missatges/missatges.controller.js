angular.module('missatges')
    .controller('missatgesController', function missatgesController(getMissatge, $scope) {
        $scope.missatges = getMissatge.all();

    });