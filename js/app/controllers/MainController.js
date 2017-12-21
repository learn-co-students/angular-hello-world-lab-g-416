function MainController($scope) {
  $scope.name = 'Mar'
  $scope.email = 'mar@gmail.com'
  $scope.phone = '12312312333'
}

angular
  .module('app')
  .controller('MainController', MainController)
