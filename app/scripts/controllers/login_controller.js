
angular.module('angularApp')
    .controller('LoginCtrl', function ($scope,$location) {

$scope.login=function(){
    if ($scope.username==="1" && $scope.password==="1"){
        $location.path('activity_list')
    }

}



    });
