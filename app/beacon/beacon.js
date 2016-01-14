'use strict';

angular.module('myApp.beacon', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'beacon/beacon.html',
    controller: 'BeaconCtrl'
  });
}])

.controller('BeaconCtrl', ["$scope", "$http", "$httpParamSerializerJQLike", function($scope, $http, $httpParamSerializerJQLike) {
  $scope.bform = {
    chromosome: 1,
    position: 1,
    alternateBases: "T"
  };
  $scope.result = "";
  $scope.showSpinner = false;

  $scope.lookup = function(bform) {
    if ($scope.bform.chromosome != "" && !!$scope.bform.position != "" && $scope.bform.alternateBases != "") {
      $scope.showSpinner = true;
      $http({
        url: "/beacon/ucscBeacon/query?chromosome=" + $scope.bform.chromosome + "&position=" + (parseInt($scope.bform.position)-1).toString() + "&alternateBases=" + $scope.bform.alternateBases,
        method: "GET"
      }).then(function(data) {
        $scope.result = data["data"];
        $scope.showSpinner = false;
      });
    }
  }

  $scope.$watch("bform", function() {
    $scope.lookup($scope.bform)
  }, true)

}]);