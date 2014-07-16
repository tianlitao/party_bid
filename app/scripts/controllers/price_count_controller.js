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
        var bid = JSON.parse(localStorage.getItem("activities"))
        for (var i in bid) {
            if (bid[i].name == localStorage.current_activity) {
                for (var j = 0; j < bid[i].bid_list.length; j++) {
                    if (bid[i].bid_list[j].bid_name == localStorage.getItem("bid")) {
                        var name = localStorage.bid
                        var bidding = bid[i].bid_list[j].bid_message;
                        //     $scope.biddings = bidding
                        $scope.people = bidding.length
                        $scope.name = name
                        var count = _.countBy(bidding, function (bidding) {
                            return bidding.bid_price
                        })
                        var coun = _.map(count, function (value, key) {
                            return {"price": key, "count": value}
                        })
                        $scope.biddings = coun
                        localStorage.setItem("bid_price",JSON.stringify(coun))

                        console.log(coun)
                        console.log("")
                        console.log(bidding[0].bid_price)
//                       for(var z in bidding) {
                        console.log(bidding)

//                        for (var z in bidding) {
//                            var count = _.filter(bidding, function (apply) {
//                                return apply.bid_price == bidding[z].bid_price;
//                            })
//                            console.log(count)
//                            //        }
//                        }
                    }
                }
            }
        }
        $scope.back = function () {
            $location.path('bidding_now')
        }


    });

