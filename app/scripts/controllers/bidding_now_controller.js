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
            if (bid[i].activity_staus == 'true' || bid.length == 0) {
                $scope.bid_start = true
            }
        }
        $scope.apply_status="2"
        for(var i in bid){
            if(bid[i].bid_status=='false'){
                $scope.apply_status="2"
            }else{
                $scope.apply_status="1"
            }
        }
        $scope.back = function () {
            $location.path('activity_list')
        }


        $scope.end = function () {
            $scope.apply_status = "2"
           var bid_status = 'false'
            for (var i in bid) {
                bid[i].bid_status = bid_status

                localStorage.setItem("activities", JSON.stringify(bid))
            }
        }

        $scope.begain = function () {
            $scope.apply_status = "1"

            //      console.log(bid[0].bid_status)
         var   bid_status = 'true'
            for (var i in bid) {
                bid[i].bid_status = bid_status
                //  console.log(bid[0].bid_status)
                localStorage.setItem("activities", JSON.stringify(bid))

            }
        }


    });
