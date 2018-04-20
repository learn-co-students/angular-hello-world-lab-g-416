function MainController($scope) {
  $scope.contact = {
    name: 'John Gilbert',
    email: 'jgilb@gmail.com',
    phone: '10101010101'
  }
}

angular.module('app').controller('MainController', MainController);
