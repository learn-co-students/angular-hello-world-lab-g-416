function MainController($scope) {
    $scope.name = 'Mike!';
    $scope.email = "mike@mike.com";
    $scope.phone = "555-555-5555";
}

  angular
  .module('app')
  .controller('MainController', MainController);