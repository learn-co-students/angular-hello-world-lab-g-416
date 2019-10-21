function MainController($scope) {
    $scope.name = 'Ayesha';
    $scope.name = 'ay@gmail.com!';
    $scope.name = '657-381-3456!';
  }



angular
  .module('app')
  .controller('MainController', MainController)
