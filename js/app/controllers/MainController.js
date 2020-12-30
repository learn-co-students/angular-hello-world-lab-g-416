function MainController(){
$scope.contact={
    name: "Caitlin",
    email: "testing@gmail.com",
    phone: "2033133919"
}
}

var module=angular.module("app")

module.controller("MainController",MainController)