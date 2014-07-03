/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('BiddingCtrl', function ($scope, $location) {

        $scope.back = function () {
            $location.path('activity_list')
        }
        var action = JSON.parse(localStorage.getItem("activities"));
        for (var i in action)
            if (action[i].name == localStorage.current_activity) {
                $scope.applys = action[i].apply_list;
            }
        for (var j in action) {
            if (action[j].name == localStorage.current_activity) {
                if (action[j].activity_staus =='true') {


                    $scope.apply_status = "1"
             //       $scope.disabled=true



                } else {
                    $scope.apply_status = "2"
            //        $scope.disabled=true

                }
            }
        }

        for(var i in action){
            if(action[i].activity_staus=='true'){
                $scope.disabled=true
                break
            }else{
                $scope.disabled=false
            }
        }

        $scope.end = function () {
            if (confirm("你确定结束吗"))
                $scope.apply_status = "2"

            apply_last = "false"
            //               var act = JSON.parse(localStorage.getItem("activities"));
            //         console.log(localStorage.current_activity)
            for (var i in action) {
                if (action[i].name == localStorage.current_activity)
                    action[i].activity_staus = apply_last
                localStorage.setItem('activities', JSON.stringify(action))
            }
        }
        $scope.begain = function () {
            $scope.apply_status = "1"
            apply_last = "true"


            //                      var act = JSON.parse(localStorage.getItem("activities"));

//            console.log(typeof(act[0].activity_staus))
//            console.log(typeof(apply_last))
            for (var i in action) {
                if (action[i].name == localStorage.current_activity)
                    action[i].activity_staus = apply_last
                localStorage.setItem('activities', JSON.stringify(action))
            }
        }
    }
)
