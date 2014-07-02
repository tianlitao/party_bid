/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('BiddingCtrl', function ($scope,$location) {

        $scope.back=function(){
       $location.path('activity_list')
   }
        $scope.apply_status="2"

        $scope.end=function(){
           if(confirm("你确定结束吗"))
            $scope.apply_status="2"

        }

        $scope.begain=function(){
            $scope.apply_status="1"
            apply_last="true"



        var act = JSON.parse(localStorage.getItem("activities"));

         console.log(typeof(act[0].activity_staus))
            console.log(typeof(apply_last))


            act[0].activity_staus=apply_last
            localStorage.setItem('activities', JSON.stringify(act))

        }

    });
