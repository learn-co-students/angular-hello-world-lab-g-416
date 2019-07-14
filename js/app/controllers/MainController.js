function MainController($scope) {
    $scope.name = "Paul";
    $scope.email = "paul@paul.com";
    $scope.phone = "8675309";

 }


 angular.module('app').controller('MainController', MainController); 