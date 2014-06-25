/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Creat_activeCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.back_one=function(){
            $location.path('active_list')
        }
        $scope.create = function () {
            var activity={name:$scope.activity};
            var activities=JSON.parse(localStorage.getItem("activities")) || [];
            var mark
            var x;
            for(x in activities) {
                if ($scope.activity == activities[x].name) {
                    confirm("活动名称重复")
                    mark=8
                    break;
                }
            }
            if(mark!=8) {
                activities.unshift(activity);
                localStorage.setItem("activities", JSON.stringify(activities))
                $location.path('bidding')
            }
        }
        $scope.show=localStorage.getItem("activities")

    });
