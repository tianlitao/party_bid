/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('BiddingCtrl', function ($scope, $location) {
        var action = JSON.parse(localStorage.getItem("activities"));
        $scope.diaoyong = function () {
            $scope.applys = Bid.get_apply_list(localStorage.current_activity)
        }
        $scope.diaoyong();
        $scope.end = function () {
            if (confirm("你确定结束吗")) {
                $scope.apply_status = "2"
                Bid.save_activity_status_false(localStorage.current_activity)
                    $scope.disabled = false
                    $location.path('bidding_now')
            }
        }
        $scope.begain = function () {
            $scope.apply_status = "1"
            Bid.save_activity_status(localStorage.current_activity)
        }
        $scope.apply_status = "2"
        if (Bid.check_current_activity_activity_status()) {
            $scope.apply_status = "1"
        }
        if (Bid.check_bid_status()) {
            $scope.disabled = true
        } else {
            if (Bid.check_activity_status()) {
                $scope.disabled = true
            } else {
                $scope.disabled = false
            }
        }
    }
)
