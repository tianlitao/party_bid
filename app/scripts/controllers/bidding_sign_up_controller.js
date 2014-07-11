angular.module('angularApp')
    .controller('Bidding_sign_upCtrl', function ($scope, $location) {
       if(localStorage.getItem("status")=="true"){
           $scope.bid_start=false
       }else{
           $scope.bid_start=true
       }



        $scope.end=function(){
            $location.path('bidding_now')
            localStorage.status="false"

        }


        $scope.back=function(){
            $location.path('bidding_now')
        }
















    })