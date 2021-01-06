function MainController($scope) {
    $scope.name = "Caitlin";
    $scope.email = "caitlin@caitlin.com";
    $scope.phone = "012345";

}


angular.module('app').controller('MainController', MainController);
