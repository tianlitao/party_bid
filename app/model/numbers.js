/**
 * Created by tlt on 14-7-25.
 */
count_six = function () {
    var a = localStorage.count

    if (a < 6) {
        localStorage.count = Number(a) + 1
    } else {
        localStorage.count = 1
    }
    return localStorage.count
}
compare_number = function (a, b) {
    console.log(a)
    console.log(b)
    var count = 0
    var coun = 0
    for (var i in a) {
        if (a[i] == b[i]) {
            count = count + 1
        } else {
            for (var j in b) {
                if (a[i] == b[j]) {
                    coun = coun + 1
                }
            }
        }
    }
    return count + "A" + coun + "B"
}
random_number = function () {
    var num = []
    while (num.length < 4) {
        var i = parseInt(10 * Math.random());
        if (!_.contains(num, i)) {
            num.push(i)
        }
    }
    return num
}
check_number_repeat=function(num){
    for (var i = 0; i < 3; i++) {
        for (var j = i + 1; j < 4; j++) {
            if (num[i] == num[j]) {
               return true
            }
        }
    }
}
check_number_is_number=function(num){
    for (var z = 0; z < num.length; z++) {
        if (isNaN(num[z])) {
            return true
        }
    }
}