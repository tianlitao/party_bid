'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/create_activity', {

        templateUrl: 'views/create_activity.html',
        controller: 'Create_activityCtrl'
      })
      .when('/bidding', {
        templateUrl: 'views/bidding.html',
        controller: 'BiddingCtrl'
      })
      .when('/', {
        templateUrl: 'views/activity_list.html',
        controller: 'Activity_listCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });


