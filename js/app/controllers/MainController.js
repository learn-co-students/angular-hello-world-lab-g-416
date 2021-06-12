function MainController($scope) {
    $scope.name = 'me'

    $scope.att = {
        first: 'some value',
        second: 'another value'
    }
}

angular
    .module('app')
    .controller('MainController', MainController)