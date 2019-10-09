angular.module('novaPenya')
    .controller('novaPenyaController', function novaPenyaController($scope) {
        $scope.submintForm = (isValid) => {
            if (isValid) {
                console.log($scope.novaPenya);
            }
        }
    });