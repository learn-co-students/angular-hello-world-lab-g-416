function MainController($scope) {
  $scope.thing = {
    power: 23,
    defense: 100,
    health: 2
  }
}
angular
  .module('app')
  .controller('MainController', MainController)