/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Active_listCtrl', function ($scope,$location) {
        $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma']
        $scope.bid=function(){
            $location.path('bidding')
        }
        $scope.creat_active=function(){
            $location.path('creat_active')
        };
        $scope.activities=JSON.parse(localStorage.getItem('activities'))
        if(localStorage.getItem("activities")) {}
        else{
        $location.path('creat_active')
         }

    }



)
