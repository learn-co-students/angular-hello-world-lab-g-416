function MainController($scope) {
  $scope.name = "Mike"
  $scope.email = "mdjurdj1@gmail.com"
  $scope.phone = "718-663-6765"
}

angular
  .module('app')
  .controller('MainController', MainController);
