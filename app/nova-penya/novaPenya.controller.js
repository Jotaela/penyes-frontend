angular.module('novaPenya')
    .controller('novaPenyaController', function novaPenyaController($scope, $mdBottomSheet, postPenyes) {
        $scope.submitForm = (isValid) => {
            if (isValid) {
                postPenyes.post($scope.novaPenya);
                $mdBottomSheet.hide();
            }
        }
    });