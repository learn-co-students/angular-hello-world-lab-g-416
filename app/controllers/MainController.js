function MainController($scope){
  $scope.contact = {
    name: 'Bill Gates',
    phone: '01234567890'
    email: 'bill.gates@microsoft.com'
  };
};

angular 
	.module('app')
	.controller('MainController', MainController)