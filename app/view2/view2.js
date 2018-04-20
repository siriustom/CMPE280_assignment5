'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}])

.controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
})
    .controller('submit', function($scope) {
      $scope.myFunc = function() {
        alert("You have submitted.");
      }
    })


.controller('myCtrl', function($scope, $location)
{
    $scope.myUrl = $location.absUrl();
})

