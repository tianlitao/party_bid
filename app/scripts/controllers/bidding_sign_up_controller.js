angular.module('angularApp')
    .controller('Bidding_sign_upCtrl', function ($scope, $location) {
        var bid = JSON.parse(localStorage.getItem("activities"))
        $scope.break = function () {
            var bid = JSON.parse(localStorage.getItem("activities"))
//var bidding= _.find(bid,function(bidding){return bidding.name==localStorage.current_activity})
//var biddings= _.find(bidding,function(bid){return bid.bid_list.bid_name==localStorage.getItem("bid")})
//if(bidding){
//    for (var j = 0; j < bidding.bid_list.length; j++) {
//        if (bid[i].bid_list[j].bid_name == localStorage.getItem("bid")) {
//            var name = localStorage.bid
//            var bidding = bid[i].bid_list[j].bid_message;
//            $scope.biddings = bidding
//            $scope.people = bidding.length
//            $scope.name = name
//
//        }
//    }
//}

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
        var bidding = _.find(bid, function (bidding) {
            return bidding.name == localStorage.current_activity && bidding.bid_status == "true" && bidding.bid_list[0].bid_name == localStorage.bid
        })
        if (bidding) {
            $scope.bid_start = false
        } else {
            $scope.bid_start = true
        }
        $scope.end = function () {
            var bid = JSON.parse(localStorage.getItem("activities"))
            if (confirm("确定要结束吗")) {
                function refresh() {
                    var refresh_page = document.getElementById('id')
                    if (refresh_page) {
                        var scope = angular.element(refresh_page).scope();
                        scope.$apply(function () {
                            scope.refreshes();
                        })
                    }
                };
                refresh()
                for (var i in bid) {

                    $scope.bid_start = true
                    bid[i].bid_status = "false"
                    localStorage.setItem("activities", JSON.stringify(bid))
                    var bidding = _.find(bid, function (bid) {
                        return bid.name == localStorage.current_activity
                    })
                    if (bidding) {
                        for (var j in bidding.bid_list) {
                            bidding.bid_list[j].bid_color = "false"
                            localStorage.setItem("activities", JSON.stringify(bid))
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