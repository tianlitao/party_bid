/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('BiddingCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back=function(){
       $location.path('activity_list')
   }

    });
