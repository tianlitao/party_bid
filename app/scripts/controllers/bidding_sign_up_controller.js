angular.module('angularApp')
    .controller('Bidding_sign_upCtrl', function ($scope, $location) {
        var bid = JSON.parse(localStorage.getItem("activities"))
        $scope.break = function () {
            var bidding = Bid.check_current_activity_bid()
            $scope.biddings = bidding
            $scope.people = bidding.length
            $scope.name = localStorage.bid
        }
        $scope.break();
        $scope.bid_start = true
        if (Bid.check_cruuent_activity() && Bid.check_bid_status() && Bid.check_current_bid()) {
            $scope.bid_start = false
        } else {
            $scope.bid_start = true
        }
        $scope.end = function () {

            if (confirm("确定要结束吗")) {
                Bid.refresh()
                Bid.save_bid_status()
                var bid = JSON.parse(localStorage.getItem("activities"))
                var bidding = _.find(bid, function (bid) {
                    return bid.name == localStorage.current_activity
                })
                if (bidding) {
                    for (var j in bidding.bid_list) {
                        bidding.bid_list[j].bid_color = "false"
                        localStorage.setItem("activities", JSON.stringify(bid))
                    }
                }
                $location.path('bid_result')
            }
        }
        $scope.back = function () {
            $location.path('bidding_now')
        }


    })