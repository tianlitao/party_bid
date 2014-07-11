angular.module('angularApp')
    .controller('Bidding_sign_upCtrl', function ($scope, $location) {
        $scope.apply_status="1"

        $scope.back=function(){
            $location.path('bidding_now')
        }
















    })