angular.module('angularApp')
    .controller('Bidding_sign_upCtrl', function ($scope, $location) {

        var bid = JSON.parse(localStorage.getItem("activities"))
        for (var i in bid) {
            if (bid[i].bid_status == "true") {
                $scope.bid_start = false
            } else {
                $scope.bid_start = true
            }
        }
        $scope.end = function () {
            for (var i in bid) {
                bid[i].bid_status = "false"
                localStorage.setItem("activities", JSON.stringify(bid))
                for (var i in bid) {
                    if (bid[i].name == localStorage.current_activity) {
                        for (var j in bid[i].bid_list) {
                            bid[i].bid_list[j].bid_color = "false"
                            localStorage.setItem("activities", JSON.stringify(bid))
                        }
                    }
                }
            }
            $location.path('bidding_now')
        }
        $scope.back = function () {
            $location.path('bidding_now')
        }


    })