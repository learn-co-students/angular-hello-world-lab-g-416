function MainController($scope) {
  $scope.name = "Test"
  $scope.email = "email@fake.com"
  $scope.phone = "777-777-7777"
}

angular.module("app").controller("MainController", MainController);