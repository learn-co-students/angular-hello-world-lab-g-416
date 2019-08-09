function MainController($scope) {
    $scope.name = 'ted';
    $scope.email = 'teds email';
    $scope.phone = '3333333333';
}

angular
    .module('app')
    .controller('MainController', MainController)