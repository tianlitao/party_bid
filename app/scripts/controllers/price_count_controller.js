/**
 * Created by tlt on 14-7-15.
 */
angular.module('angularApp')
    .controller('Price_countCtrl', function ($scope, $location) {
        localStorage.status = true
        $scope.refreshes = function () {
            var bid_price = JSON.parse(localStorage.getItem("bid_price"))
            var bidding=Bid.check_current_activity_bid()
            $scope.name=localStorage.bid
            $scope.biddings=bid_price
            $scope.people=bidding.length
            if(Bid.check_bid_price_bid_count() && Bid.check_cruuent_activity() && Bid.check_bid_messages_bid_price()){
                var bid_messages =Bid.check_bid_messages_bid_price()
                console.log(Bid.check_bid_messages_bid_price())
                $scope.success = "true"
                $scope.fail = "false"
                $scope.bid_name = bid_messages.bid_name
                $scope.price = bid_messages.bid_price
                $scope.phone = bid_messages.bid_phone
            }else {
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

