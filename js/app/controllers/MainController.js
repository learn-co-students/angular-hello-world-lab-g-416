function MainController($scope) {
    $scope.name = 'Kelly';
    $scope.email = 'kp@gmail.com';
    $scope.phone = '1234567'
}

angular
	.module('app')
	.controller('MainController', MainController);
