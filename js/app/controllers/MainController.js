function MainController($scope) {
  $scope.name = 'Bill Gates';
  $scope.email = 'Gates.email.com';
  $scope.phone = '01234567890';
}

angular
  .module('app')
  .controller('MainController', MainController);
