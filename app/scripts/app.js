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
      .when('/bidding_sign_up', {

            templateUrl: 'views/bidding_sign_up.html',
            controller: 'Bidding_sign_upCtrl'
        })
      .when('/bidding', {
        templateUrl: 'views/bidding.html',
        controller: 'BiddingCtrl'
      })
      .when('/bidding_now', {
            templateUrl: 'views/bidding_now.html',
            controller: 'Bidding_nowCtrl'
        })
      .when('/', {
        templateUrl: 'views/activity_list.html',
        controller: 'Activity_listCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });


