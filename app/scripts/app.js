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
            controller: 'BiddingsignupCtrl'
        })
        .when('/bid_result', {

            templateUrl: 'views/bid_result.html',
            controller: 'BidresultCtrl'
        })
        .when('/price_count', {

            templateUrl: 'views/price_count.html',
            controller: 'PricecountCtrl'
        })
      .when('/bidding', {
        templateUrl: 'views/bidding.html',
        controller: 'BiddingCtrl'
      })
      .when('/bidding_now', {
            templateUrl: 'views/bidding_now.html',
            controller: 'BiddingnowCtrl'
        })
      .when('/', {
        templateUrl: 'views/activity_list.html',
        controller: 'ActivitylistCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });


