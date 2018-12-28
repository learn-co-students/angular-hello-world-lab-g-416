function MainController($scope) {
	$scope.name = 'Olena';	
	$scope.phone = '01234567890';
}

angular
	.module('app')
	.controller('MainController', MainController);