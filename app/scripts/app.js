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
      .when('/creat_active', {

        templateUrl: 'views/creat_active.html',
        controller: 'Creat_activeCtrl'
      })
      .when('/bidding', {
        templateUrl: 'views/bidding.html',
        controller: 'BiddingCtrl'
      })
      .when('/', {
        templateUrl: 'views/active_list.html',
        controller: 'Active_listCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });


