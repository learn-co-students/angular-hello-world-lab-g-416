function MainController($scope){
  $scope.name = "derp"
}

angular
  .module('app')
  .controller('MainController', MainController)
