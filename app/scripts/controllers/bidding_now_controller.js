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
        console.log(bid[0].bid_list)
        for (var i in bid) {
            if (bid[i].activity_staus == 'true' || bid.length == 0) {
                $scope.bid_start = true
            }
        }

        $scope.back = function () {
            $location.path('activity_list')
        }
        $scope.bid_start = localStorage.getItem("status")
        $scope.begain = function () {
            localStorage.status = true

            console.log($scope.bid_start)

            //      console.log(bid[0].bid_status)
            var bid_status = 'true'
            for (var i in bid) {
                bid[i].bid_status = bid_status
                //  console.log(bid[0].bid_status)
                localStorage.setItem("activities", JSON.stringify(bid))
                $location.path('bidding_sign_up')
                //      var bid_list={'bid_name':bid_name}


                for (var i in bid) {
                    if (bid[i].name == localStorage.current_activity) {

                        if (bid[i].bid_list.length == 0) {
                            console.log("11")
                var              bid_name = 1
                            console.log(bid_name)
                        } else {
                   var           bid_name = bid[i].bid_list.length + 1
                        }


                        var bid_list = {'bid_name': bid_name}
                        bid[i].bid_list.push(bid_list)
                        localStorage.setItem('activities', JSON.stringify(bid))
                    }
                }

            }
        }


    });
