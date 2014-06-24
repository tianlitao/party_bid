/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Creat_activeCtrl', function ($scope,$location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //console.log("34535");
        $scope.activeone = localStorage.getItem('activeone');
        $scope.create = function () {


            localStorage.setItem('activeone', $scope.active);


            $location.path('bidding')
        }


//        var a='';
//        var b=[];
//        a='活动1';
//        localStorage.setItem("actives",JSON.stringify(b));
//        console.log(localStorage.getItem("actives"));
//        b=JSON.parse(localStorage.getItem("actives"));
//        a='活动3';
//        b.push(a);
//       console.log(b);
        var active={name:$scope.activeone};

        var actives=JSON.parse(localStorage.getItem("actives"));
        actives.push(active);

        localStorage.setItem("actives",JSON.stringify(actives))

    });
