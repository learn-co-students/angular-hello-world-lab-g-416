function MainController($scope) {
    $scope.name = "bill",
    $scope.email = "bill@bill.com",
    $scope.phone = "5552345"

}
angular
    .module("app")
    .controller("MainController", MainController)