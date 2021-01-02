function MainController($scope){
    $scope.name = "Trevor", 
    $scope.email = "trevor@trevor.com",
    $scope.phone = "123-456-7890"
}

angular

.module('app')
.controller('MainController', MainController)