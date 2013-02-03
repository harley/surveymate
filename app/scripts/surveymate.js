'use strict';

// Declare app level module which depends on filters, and services
var surveymateApp = angular.module('surveymateApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/survey', {
        templateUrl: 'views/surveys/edit.html',
        controller: 'SurveysCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
