angular.module('angularApp')
    .controller('Bid_resultCtrl', function ($scope, $location, $timeout) {
        var bid = JSON.parse(localStorage.getItem("activities"))
        for (var i in bid) {
            if (bid[i].name == localStorage.current_activity) {
                for (var j = 0; j < bid[i].bid_list.length; j++) {
                    if (bid[i].bid_list[j].bid_name == localStorage.getItem("bid")) {
                        var bidding = bid[i].bid_list[j].bid_message;
                        var count = _.countBy(bidding, function (bidding) {
                            return bidding.bid_price
                        })
                        var coun = _.map(count, function (value, key) {
                            return {"price": key, "count": value}
                        })
                        localStorage.setItem("bid_price", JSON.stringify(coun))
                    }
                }
            }
        }
        var bid_price = JSON.parse(localStorage.getItem("bid_price"))
        var bids= _.find(bid_price,function(bid){return bid.count==1})
        if (bids) {
            if (localStorage.status == "false") {
                $timeout(function () {
                    $('#ModalSuccess').modal("show");
                    $timeout(function () {
                        $('#ModalSuccess').modal('hide');
                    }, 3000)
                })
            }
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
//        for (var z in bid_price) {
//            if (bid_price[z].count == 1) {
//                if (localStorage.status == "false") {
//                    $timeout(function () {
//                        $('#ModalSuccess').modal("show");
//                        $timeout(function () {
//                            $('#ModalSuccess').modal('hide');
//                        }, 3000)
//                    })
//                }
//                for (var i in bid) {
//                    if (bid[i].name == localStorage.current_activity) {
//                        var bid_message = bid[i].bid_list[0].bid_message
//                        var bid_messages = _.find(bid_message, function (bid) {
//                            return bid.bid_price == bid_price[z].price
//                        })
//
//                        if (bid_messages) {
//
//                            $scope.success = "true"
//                            $scope.fail = "false"
//                            $scope.bid_name = bid_messages.bid_name
//                            $scope.price = bid_messages.bid_price
//                            $scope.phone = bid_messages.bid_phone
//                        }
//                    }
//                }
//                break
//            } else {
//                $scope.success = "false"
//                $scope.fail = "true"
//            }
//
//        }

        for (var i in bid) {
            if (bid[i].name == localStorage.current_activity) {
                for (var j = 0; j < bid[i].bid_list.length; j++) {
                    if (bid[i].bid_list[j].bid_name == localStorage.getItem("bid")) {
                        var name = localStorage.bid
                        var bidding = bid[i].bid_list[j].bid_message;
                        var bidding_count = _.sortBy(bidding, function (bidding) {
                            return bidding.bid_price
                        })

                        $scope.biddings = bidding_count
                        $scope.people = bidding.length
                        $scope.name = name

                    }
                }
            }
        }
        $scope.back = function () {
            localStorage.status = false
            $location.path('bidding_now')
        }


    });
