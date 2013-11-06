'use strict'

describe 'Controller: <%= classedName %>Ctrl', () ->

  # load the controller's module
  beforeEach module '<%= scriptAppName %>'

  <%= classedName %>Ctrl = {}
  scope = {}
  $httpBackend = {}

  # Initialize the controller and a mock scope
  beforeEach inject (_$httpBackend_, $controller, $rootScope) ->
    $httpBackend = _$httpBackend_
    $httpBackend.expectGET('/api/awesomeThings').respond ['HTML5 Boilerplate', 'AngularJS', 'Karma']
    scope = $rootScope.$new()
    <%= classedName %>Ctrl = $controller '<%= classedName %>Ctrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', () ->
    expect(scope.awesomeThings).toBeUndefined()
    $httpBackend.flush()
    expect(scope.awesomeThings.length).toBe 3
