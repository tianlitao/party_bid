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
        Bid.current_display_bid_messages($scope);
        Bid.judge_check_bid_price_bid_count($scope)
        $scope.biddings=Bid.display_sortby()
        $scope.people = Bid.check_current_activity_bid().length
        $scope.name=localStorage.bid
        $scope.back = function () {
            localStorage.status = false
            $location.path('bidding_now')
        }
    });
