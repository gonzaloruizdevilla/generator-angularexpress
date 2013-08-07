'use strict';

angular.module('<%= moduleName %>')
  .controller('<%= _.classify(name) %>Ctrl', function ($scope, $http) {
    $http.get("/api/awesomeThings").success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
