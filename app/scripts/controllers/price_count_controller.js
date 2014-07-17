/**
 * Created by tlt on 14-7-15.
 */
angular.module('angularApp')
    .controller('Price_countCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        localStorage.status = true
        $scope.refreshes = function () {
            var bid = JSON.parse(localStorage.getItem("activities"))
            var bid_price = JSON.parse(localStorage.getItem("bid_price"))
            for (var i in bid) {
                if (bid[i].name == localStorage.current_activity) {
                    for (var j = 0; j < bid[i].bid_list.length; j++) {
                        if (bid[i].bid_list[j].bid_name == localStorage.getItem("bid")) {
                            var name = localStorage.bid
                            var bidding = bid[i].bid_list[j].bid_message;
                            $scope.people = bidding.length
                            $scope.name = name
                            $scope.biddings = bid_price
                        }
                    }
                }
            }
            var bids = _.find(bid_price, function (bid) {
                return bid.count == 1
            })
            if (bids) {
                var bidding = _.find(bid, function (bid) {
                    return bid.name == localStorage.current_activity
                })
                if (bidding) {
                    var bid_message = bidding.bid_list[0].bid_message
                    var bid_messages = _.find(bid_message, function (bid) {
                        return bid.bid_price == bids.price
                    })

                    if (bid_messages) {

                        $scope.success = "true"
                        $scope.fail = "false"
                        $scope.bid_name = bid_messages.bid_name
                        $scope.price = bid_messages.bid_price
                        $scope.phone = bid_messages.bid_phone
                    }
                }
            } else {
                $scope.success = "false"
                $scope.fail = "true"
            }
        }
        $scope.refreshes()
        $scope.back = function () {
            localStorage.status == false
            $location.path('bidding_now')
        }


    });

