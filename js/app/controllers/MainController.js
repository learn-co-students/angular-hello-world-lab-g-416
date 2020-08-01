function MainController($scope){
    $scope.contact = {
        name: "Paul",
        sext: "male"
    }
}

angular
    .module('app')
    .contoller('MainController', MainController)