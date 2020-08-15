function MainController($scope) {
  $scope.name = 'Zachary';
  $scope.email = 'zjschulz@gmail.com';
  $scope.phone = 6108047129;
}

angular
  .module('app')
  .controller('MainController', MainController);