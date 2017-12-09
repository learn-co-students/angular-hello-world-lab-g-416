function MainController($scope) {
  $scope.name = "Beyonce";
  $scope.email = "b@me.com";
  $scope.phone = "555-393-3999";
}

angular
  .module('app')
  .controller('MainController', MainController);
