function MainController($scope) {
  $scope.name = "Sam";
  $scope.email = "stkalum@gmail.com";
  $scope.phone = "+1 (650) 814-2424";
}

angular
  .module('app')
  .controller('MainController', MainController)
