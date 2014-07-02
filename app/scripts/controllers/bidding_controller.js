/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('BiddingCtrl', function ($scope,$location) {

        $scope.back=function(){
       $location.path('activity_list')
   }
        $scope.apply_status="2"

        $scope.end=function(){
           if(confirm("你确定结束吗"))
            $scope.apply_status="2"

                apply_last = "false"
                var act = JSON.parse(localStorage.getItem("activities"));
   //         console.log(localStorage.current_activity)
           for(var i in act) {if(act[i].name==localStorage.current_activity)
                act[i].activity_staus = apply_last
                localStorage.setItem('activities', JSON.stringify(act))
            }
        }

         var act= JSON.parse(localStorage.getItem("activities"));
        for(var i in act)
            if(act[i].name==localStorage.current_activity) {
                $scope.applys = act[i].apply_list;
            }
//        console.log(act[0].apply_list[0].apply_name)
//        for(var i in act){
//
//        }


 //       console.log(typeof(act.name))

//        var messages=act.apply_list
//        console.log(messages)

        $scope.begain=function() {
            $scope.apply_status = "1"
            apply_last = "true"


            var act = JSON.parse(localStorage.getItem("activities"));

//            console.log(typeof(act[0].activity_staus))
//            console.log(typeof(apply_last))
            for (var i in act) {
                if (act[i].name == localStorage.current_activity)
                act[i].activity_staus = apply_last

                    act[i].activity_staus = apply_last
                localStorage.setItem('activities', JSON.stringify(act))

            }
        }

    });
