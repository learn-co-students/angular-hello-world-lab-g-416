function MainController($scope) {
	$scope.name = 'Richard';
  $scope.email = 'Richardojo346@gmail.com';
  $scope.phone = '281-818-6611'
}



angular
  .module('app')
  .controller('MainController', MainController);
