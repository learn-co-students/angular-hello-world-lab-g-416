function MainController($scope){
    $scope.contact = {
        name: 'Bill',
        email: 'bill@gmail.com'
    };
}

angular 
    .module('app')
    .controller('MainController', MainController)