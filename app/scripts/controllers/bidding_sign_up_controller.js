angular.module('angularApp')
    .controller('Bidding_sign_upCtrl', function ($scope, $location) {
        var bid = JSON.parse(localStorage.getItem("activities"))
        $scope.break = function () {
            var bid = JSON.parse(localStorage.getItem("activities"))
            for (var i in bid) {
                if (bid[i].name == localStorage.current_activity) {
                    for (var j = 0; j < bid[i].bid_list.length; j++) {
                        if (bid[i].bid_list[j].bid_name == localStorage.getItem("bid")) {
                            var name = localStorage.bid
                            var bidding = bid[i].bid_list[j].bid_message;
                            $scope.biddings = bidding
                            $scope.people = bidding.length
                            $scope.name = name

                        }
                    }
                }
            }
        }
        $scope.break();
        $scope.bid_start = true
        for (var i in bid) {
            if (bid[i].name == localStorage.current_activity) {
                if (bid[i].bid_status == "true") {
                    if (bid[i].bid_list[0].bid_name == localStorage.bid) {
                        $scope.bid_start = false

                    } else {
                        $scope.bid_start = true
                        console.log("2")

                    }
                }
            }
        }
        $scope.end = function () {
            var bid = JSON.parse(localStorage.getItem("activities"))
            if (confirm("确定要结束吗")) {
                for (var i in bid) {
                    $scope.bid_start = true
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
                $location.path('bid_result')
            }
        }
        $scope.back = function () {
            $location.path('bidding_now')
        }


    })