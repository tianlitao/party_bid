angular.module('angularApp')
    .controller('Bidding_sign_upCtrl', function ($scope, $location) {
        var bid = JSON.parse(localStorage.getItem("activities"))
        $scope.break = function () {
            $scope.biddings = Bid.check_current_activity_bid()
            $scope.people = Bid.check_current_activity_bid().length
            $scope.name = localStorage.bid
        }
        $scope.break();
        $scope.bid_start = true
        Bid.check_bid_start($scope)
        $scope.end = function () {
            if (confirm("确定要结束吗")) {
                Bid.check_current_activity_save_bid_color()
                $location.path('bid_result')
            }
        }
        $scope.back = function () {
            $location.path('bidding_now')
        }
    })