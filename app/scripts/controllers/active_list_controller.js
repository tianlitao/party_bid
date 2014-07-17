/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Activity_listCtrl', function ($scope, $location) {
        $scope.bid = function (activity) {
            $location.path('bidding')
            localStorage.current_activity = activity;
        }
        $scope.create_activity = function () {
            $location.path('create_activity')
        };
        $scope.activities = JSON.parse(localStorage.getItem('activities'))
        if (!localStorage.getItem("activities")) {
            $location.path('create_activity')
        }



    }
)
