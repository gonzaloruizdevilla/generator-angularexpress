'use strict';

angular.module('<%= scriptAppName %>')
<<<<<<< HEAD
  .controller('<%= classedName %>Ctrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
=======
  .controller('<%= classedName %>Ctrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
>>>>>>> 09f0f7b... feat(gen): allow app names to have custom suffix
  });
