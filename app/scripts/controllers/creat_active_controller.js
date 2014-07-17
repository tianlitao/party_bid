/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Create_activityCtrl', function ($scope,$location) {

        $scope.back_one=function(){
            $location.path('activity_list/')

        }
        $scope.create = function () {
         //   var activity=new Activity($scope.activity)
            var activity={'name':$scope.activity,'activity_status':'false','apply_list':[],'bid_status':'false','bid_list':[]};
            var activities=JSON.parse(localStorage.getItem("activities")) || [];

            if(_.find(activities,function(act){  return act.name==$scope.activity })){
                $scope.hide=1

            }else {
                activities.unshift(activity);
                localStorage.setItem("activities",JSON.stringify(activities))
                var activities = JSON.parse(localStorage.getItem('activities'))
                localStorage.current_activity=activities[0].name
                $location.path('bidding')
            }
        }
        $scope.show=localStorage.getItem("activities")

    });
