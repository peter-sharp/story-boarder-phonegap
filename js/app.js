/* global angular*/
'use strict';

var app = angular.module('StoryBoarder', [
  'ngRoute',
  'ngCookies',
  'ngResource'
]);



app.config(['$compileProvider','$routeProvider', '$resourceProvider', function ($compileProvider, $routeProvider, $resourceProvider) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    
    $routeProvider
      .when('/', {
        
        templateUrl: 'views/home.html'
      }).when('/add',{
        templateUrl: 'views/add.html'
      }).when('/view',{
        templateUrl: 'views/view.html'
      })
      .otherwise('/');

  }]);



 
