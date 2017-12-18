function MainController($scope) {
  $scope.name = "Tyler";
  $scope.mood = "Confused";
}

angular
  .module("app")
  .controller("MainController", MainController);
