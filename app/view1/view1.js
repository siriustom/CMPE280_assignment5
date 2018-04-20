'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}])
// set initial value
.controller('addDish', function($scope){
	$scope.name = '';
	$scope.dish = [];
    $scope.changeText = function($event) {
        $scope.name = $event.target.value;
    }
    $scope.submitDish = function () {
        $scope.dish.push($scope.name);
    }
});