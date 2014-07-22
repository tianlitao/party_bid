/**
 * Created by tlt on 14-6-30.
 */
/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Bidding_nowCtrl', function ($scope, $location) {
        var bid = JSON.parse(localStorage.getItem("activities"));
        Bid.judge_check_bid_status($scope)
        var bidding = Bid.activity_current_activity()
        $scope.activity = Bid.check_current_activity_bid_list()
        Bid.judge_check_activity_status_length($scope)
        $scope.bid = function (bidding) {
            $location.path('bidding_sign_up')
            localStorage.bid = bidding
        }
        $scope.begain = function () {
            $location.path('bidding_sign_up')
            if (bidding) {
                bidding.bid_status = "true"
                localStorage.setItem("activities", JSON.stringify(bid))
                localStorage.bid = "竞价" + (bidding.bid_list.length + 1)
                var bid_name = "竞价" + (bidding.bid_list.length + 1)
                var bid_list = {'bid_name': bid_name, 'bid_color': 'true', 'bid_message': []}
                bidding.bid_list.unshift(bid_list)
                localStorage.setItem('activities', JSON.stringify(bid))
            }
        }
    });
