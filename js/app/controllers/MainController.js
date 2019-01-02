function MainController($scope) {
  $scope.name = "austin";
  $scope.email = "example@gmail.com";
  $scope.phone = "818-555-5442";
}

angular.module("app").controller("MainController", MainController);
