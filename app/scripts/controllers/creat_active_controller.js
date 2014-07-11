/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Create_activityCtrl', function ($scope,$location) {

        $scope.back_one=function(){
            $location.path('activity_list/')

        }
        $scope.create = function () {
            var activity={'name':$scope.activity,'activity_staus':'false','apply_list':[],'bid_status':'false','bid_list':[],'bid_message':[]};
            var activities=JSON.parse(localStorage.getItem("activities")) || [];
            var if_mark
            var recyle;
            for(recyle in activities) {
                if ($scope.activity == activities[recyle].name) {
                    $scope.hide=1

                    if_mark=true
                    break;
                }
            }
            if(!if_mark) {
                activities.unshift(activity);
                localStorage.setItem("activities",JSON.stringify(activities))
                var activities = JSON.parse(localStorage.getItem('activities'))
                localStorage.current_activity=activities[0].name
                $location.path('bidding')
            }
        }
        $scope.show=localStorage.getItem("activities")

    });
