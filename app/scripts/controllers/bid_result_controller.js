angular.module('angularApp')
    .controller('Bid_resultCtrl', function ($scope, $location) {
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
                        $scope.biddings = bidding
                        $scope.people = bidding.length
                        $scope.name = name

                    }
                }
            }
        }
        $scope.back=function(){
            $location.path('bidding_now')
        }


    });
