function MainController($scope) {
	$scope.contact = {
    name: 'Bill Gates',
    phone: '01234567890',
    email: 'bill@gates.com'
  };
}

// function MainController($scope) {
// 	$scope.name = 'Bill Gates';
// 	$scope.email = 'bill@microsoft.com';
// 	$scope.phone = '01234567890';
// }

angular
	.module('app')
	.controller('MainController', MainController);

