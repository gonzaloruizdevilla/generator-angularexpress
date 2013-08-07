'use strict';

angular.module('<%= moduleName %>')
  .controller('<%= _.classify(name) %>Ctrl', ['$scope', function ($scope) {
    $http.get("/api/awesomeThings").success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  }]);
