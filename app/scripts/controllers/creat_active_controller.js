/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Create_activityCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_one=function(){
            $location.path('activity_list')
        }
        $scope.create = function () {
            var activity={name:$scope.activity};
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
                localStorage.setItem("activities", JSON.stringify(activities))
                $location.path('bidding')
            }
        }
        $scope.show=localStorage.getItem("activities")

    });
