function MainController($scope) {
  $scope.name = "Maryna";
  $scope.email = "maryna.voitenko@gmail.com";
  $scope.phone = "2123334444";
}

angular
  .module('app')
  .controller('MainController', MainController);
