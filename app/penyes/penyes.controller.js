angular.module('penyes')
    .controller('penyesController', [
        '$scope',
        'getPenyes',
        '$mdBottomSheet',
        '$mdSidenav',
        function penyesController($scope,
            getPenyes,
            $mdBottomSheet) {
            $scope.menorQue500 = window.screen.height < 500;
            $scope.penyes = getPenyes.all();

            $scope.infoPenya = function (penya) {
                $mdBottomSheet.show({
                    templateUrl: './info-penya/infoPenya.template.html',
                    controller: 'infoPenyaController',
                    locals: {
                        penya: penya
                    },
                    bindToController: true,
                    clickOutsideToClose: true,
                    escapeToClose: true
                });
            }

            $scope.novaPenya = function () {
                $mdBottomSheet.show({
                    templateUrl: './nova-penya/novaPenya.template.html',
                    controller: 'novaPenyaController',
                    clickOutsideToClose: true,
                    escapeToClose: true
                });
            }
        }
    ]);