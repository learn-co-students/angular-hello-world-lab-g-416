function MainController($scope) {
  $scope.name = "HI";
  $scope.email = "Hi@hi.com";
  $scope.phone = "123-123-1234";
}

angular
  .module('app')
  .controller('MainController', MainController);
