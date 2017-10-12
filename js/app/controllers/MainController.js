function MainController($scope) {
    $scope.name = 'Elon';
    $scope.email = 'elon@spacex.com';
    $scope.phone = '0123456789';
}

angular
    .module('app')
    .controller('MainController', MainController);