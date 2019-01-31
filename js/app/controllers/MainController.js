function MainController($scope){
  $scope.name = "sav"
  $scope.email = "sav@sav"
  $scope.phone ="21344123"
}

angular
  .module('app')
  .controller('MainController', MainController)
