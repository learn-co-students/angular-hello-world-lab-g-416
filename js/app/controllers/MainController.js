function MainController($scope) {
    $scope.name = "Ben";
    $scope.email = "ben@ben.com";
    $scope.phone = "212-222-2222";
}

angular.module('app').controller('MainController', MainController);