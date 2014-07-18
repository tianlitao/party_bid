/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Create_activityCtrl', function ($scope, $location) {
        $scope.create = function () {
            var activity = new Activity($scope.activity);
            var activities = JSON.parse(localStorage.getItem("activities")) || [];
            if (_.find(activities, function (act) {
                return act.name == $scope.activity
            })) {
                $scope.hide = 1
            } else {
                Activity.save_message(activity)
                Activity.save_current_activity()
                $location.path('bidding')
            }
        }
        $scope.show = Activity.check_activity_list_exist()
    });
