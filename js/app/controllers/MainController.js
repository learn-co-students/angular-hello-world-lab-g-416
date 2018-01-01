function MainController($scope) {
  $scope.name = "Pam"
  $scope.email = "pb@email.com"
  $scope.phone = "5161234567"
}

angular
  .module('app')
  .controller('MainController', MainController);
