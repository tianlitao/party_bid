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
//


        //console.log("34535");

        $scope.create = function () {


            $location.path('bidding')

            var active={name:$scope.active};


            var actives=JSON.parse(localStorage.getItem("actives")) || [];

            actives.unshift(active);

            localStorage.setItem("actives",JSON.stringify(actives))



        }






    });
