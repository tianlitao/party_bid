/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('BiddingCtrl', function ($scope, $location) {

        $scope.back = function () {
            $location.path('activity_list')
        }
        var action = JSON.parse(localStorage.getItem("activities"));
        $scope.diaoyong = function () {
            var action = JSON.parse(localStorage.getItem("activities"));
            var act = _.find(action, function (act) {
                return act.name == localStorage.current_activity
            })
            if (act) {
                $scope.applys = act.apply_list
                $scope.people = act.apply_list.length

            }
        }
        $scope.diaoyong();
        $scope.end = function () {
            if (confirm("你确定结束吗")) {
                $scope.apply_status = "2"
                //               var act = JSON.parse(localStorage.getItem("activities"));
                //         console.log(localStorage.current_activity)
                var actions = JSON.parse(localStorage.getItem("activities"));
                var activity = _.find(actions, function (act) {
                    return act.name == localStorage.current_activity
                })
                if (activity) {
                    activity.activity_status = "false"
                    localStorage.setItem('activities', JSON.stringify(actions))
                    $scope.disabled = false
                    $location.path('bidding_now')
                }
            }
        }
        $scope.begain = function () {
            $scope.apply_status = "1"
            var act = _.find(action, function (act) {
                return act.name == localStorage.current_activity
            })
            if (act) {
                act.activity_status = "true"
                localStorage.setItem('activities', JSON.stringify(action))
            }
        }
        var act = _.find(action, function (act) {
            return act.name == localStorage.current_activity && act.activity_status == 'true'
        })
        if (act) {
            $scope.apply_status = "1"
        } else {
            $scope.apply_status = "2"
        }
        if (_.find(action, function (action) {
            return action.bid_status == 'true'
        })) {
            $scope.disabled = true
        } else {
            if (_.find(action, function (action) {
                return action.activity_status == 'true'
            })) {
                $scope.disabled = true
            } else {
                $scope.disabled = false
            }
        }
    }
)
