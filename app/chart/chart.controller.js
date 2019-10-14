angular.module('chart')
    .controller('chartController', function chartController($scope) {
        $scope.chartOptions = {
            dataSource: [
                { fruit: 'Oranges', total: 10, total2: 15 },
                { fruit: 'Apples', total: 15, total2: 3 },
                { fruit: 'Bananas', total: 9, total2: 6 }
            ],
            series: [
                { argumentField: 'fruit', valueField: 'total' },
                { argumentField: 'fruit', valueField: 'total2' }
            ]
        };
    });