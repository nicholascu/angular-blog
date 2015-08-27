angular.module("angularBlog", [])
.controller("MainCtrl", [
'$scope', 
function($scope){
	$scope.test = "HELLO WORLD!"
}]);