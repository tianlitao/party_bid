/**
 * Created by tlt on 14-7-25.
 */
angular.module('angularApp')
    .controller('NumberCtrl', function ($scope, $location) {

        var num = random_number()
        $scope.create = function () {
            $location.path('/number')
            var b = $scope.activity
            console.log(num)
            if (b.length != 4 || check_number_repeat(b) || check_number_is_number(b)) {
                alert("请重新输入")
            } else {
                var success = compare_number(num, b)
                if (success == '4A0B') {
                    alert("Congratulations,You win")
                    location.reload();
                } else {
                    $scope.relay = compare_number(num, b)
                }
            }
            var a = count_six()
            console.log(a)
            if (a == 6) {
                alert("I'm very sorry,Game is over")
                location.reload();


            }
        }


    });

