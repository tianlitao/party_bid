/**
 * Created by tlt on 14-6-30.
 */
/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Bidding_nowCtrl', function ($scope, $location) {
        var bid = JSON.parse(localStorage.getItem("activities"));
        if (Bid.check_bid_status()) {
            $scope.bid_start = true
        }
        var bidding = _.find(bid, function (bidding) {
            return bidding.name == localStorage.current_activity
        })
        $scope.activity = Bid.check_current_activity_bid_list()

        if (Bid.check_activity_status_length()) {
            $scope.bid_start = true
        }
        $scope.bid = function (bidding) {
            $location.path('bidding_sign_up')
            localStorage.bid = bidding
        }
        $scope.back = function () {
            $location.path('activity_list')
        }
    //    Bid.save_bid_status()
        $scope.begain = function () {
            Bid.save_bid_status_bid_messaage()
            $location.path('bidding_sign_up')

//            if (bidding) {
//                bidding.bid_status = "true"
//                localStorage.setItem("activities", JSON.stringify(bid))
//                localStorage.bid = "竞价" + (bidding.bid_list.length + 1)
//                var bid_name = "竞价" + (bidding.bid_list.length + 1)
//                var bid_list = {'bid_name': bid_name, 'bid_color': 'true', 'bid_message': []}
//                bidding.bid_list.unshift(bid_list)
//                localStorage.setItem('activities', JSON.stringify(bid))
//            }
        }


    });
