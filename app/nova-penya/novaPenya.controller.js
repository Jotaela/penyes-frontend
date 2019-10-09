angular.module('novaPenya')
    .controller('novaPenyaController', function novaPenyaController($scope, $mdBottomSheet, postPenyes) {
        $scope.submitForm = (isValid) => {
            console.log('hola');
            if (isValid) {
                postPenyes.post($scope.novaPenya);
                $mdBottomSheet.hide();
            }
        }
    });