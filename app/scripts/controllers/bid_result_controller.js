angular.module('angularApp')
    .controller('Bid_resultCtrl', function ($scope, $location, $timeout) {
        var bid = JSON.parse(localStorage.getItem("activities"))
        Bid.save_bid_price()
        var bid_price = JSON.parse(localStorage.getItem("bid_price"))
        if(Bid.check_bid_price_bid_count() && localStorage.status == "false"){
            $timeout(function () {
                $('#ModalSuccess').modal("show");
                $timeout(function () {
                    $('#ModalSuccess').modal('hide');
                }, 3000)
            })
        }
//        if(Bid.check_bid_price_bid_count() && Bid.activity_current_activity() && Bid.check_bid_messages_bid_price()){
//            var bid_messages=Bid.check_bid_messages_bid_price()
//         //   console.log(bid_messages.length)
//            $scope.success = "true"
//            $scope.fail = "false"
//            $scope.bid_name = Bid.check_bid_messages_bid_price().bid_name
//            $scope.price = Bid.check_bid_messages_bid_price().bid_price
//            $scope.phone = Bid.check_bid_messages_bid_price().bid_phone
//        }
        name_test($scope);
        if(!Bid.check_bid_price_bid_count()){
            $scope.success = "false"
            $scope.fail = "true"
        }
        $scope.biddings=Bid.display_sortby()
        $scope.people = Bid.check_current_activity_bid().length
        $scope.name=localStorage.bid
        $scope.back = function () {
            localStorage.status = false
            $location.path('bidding_now')
        }
    });

function name_test($scope)
{
    if(Bid.check_bid_price_bid_count() && Bid.activity_current_activity() && Bid.check_bid_messages_bid_price()){
        $scope.success = "true"
        $scope.fail = "false"
        $scope.bid_name = Bid.check_bid_messages_bid_price().bid_name
        $scope.price = Bid.check_bid_messages_bid_price().bid_price
        $scope.phone = Bid.check_bid_messages_bid_price().bid_phone
    }
}