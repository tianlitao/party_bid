/**
 * Created by tlt on 14-6-21.
 */
angular.module('angularApp')
    .controller('Active_listCtrl', function ($scope,$location) {
        $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma']
        $scope.active_list=localStorage.getItem('creat_active')
        $scope.bid=function(){
            $location.path('bidding')
        }

        $scope.creat_active=function(){

            $location.path('creat_active')};

        $scope.actives=JSON.parse(localStorage.getItem('actives'))




    }



)
