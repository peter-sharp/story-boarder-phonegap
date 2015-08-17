/* global angular */
'use strict';

/**
 * @ngdoc function
 * @name ordering-system.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ordering-systemApp
 */
angular.module('StoryBoarder')
  .controller('MainCtrl', function ($scope) {
    $scope.boards = [];
  });