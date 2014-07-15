/**
 * Created by tlt on 14-6-30.
 */
/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Bidding_nowCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //   $scope.bid_start = true

        var bid = JSON.parse(localStorage.getItem("activities"));
        for (var i in bid) {
            if (bid[i].bid_status == "true") {
                $scope.bid_start = true

            }
        }

        for (var i in bid) {
            if (bid[i].name == localStorage.current_activity) {
                $scope.activity = bid[i].bid_list
//                if (bid[i].bid_status == "false") {
//                    $scope.bid_start = false
//                } else {
//                    $scope.bid_start = true
//                }
            }
        }
        for (var i in bid) {
            if (bid[i].activity_staus == 'true' || bid.length == 0) {
                $scope.bid_start = true
            }
        }
        $scope.bid = function (bidding) {
            $location.path('bidding_sign_up')
            localStorage.bid = bidding

        }
        $scope.back = function () {
            $location.path('activity_list')
        }
        $scope.begain = function () {


            for (var i in bid) {
                if (bid[i].name == localStorage.current_activity) {
                    bid[i].bid_status = "true"
                    localStorage.setItem("activities", JSON.stringify(bid))
                }
            }
            $location.path('bidding_sign_up')
            for (var j in bid) {
                if (bid[j].name == localStorage.current_activity) {
                    localStorage.bid = "竞价" + (bid[j].bid_list.length + 1)
                    if (bid[j].bid_list.length == 0) {
                        var bid_name = "竞价1"
                    } else {
                        var bid_name = "竞价" + (bid[j].bid_list.length + 1)

                    }
                    var bid_list = {'bid_name': bid_name, 'bid_color': 'true', 'bid_message': []}
                    bid[j].bid_list.unshift(bid_list)
                    localStorage.setItem('activities', JSON.stringify(bid))
                    break
                }
            }


        }


    });
