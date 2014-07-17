//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers": [
//            {"name": 'name', "phone": phone}
//        ]}, {"message_content": message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },
    process_received_message: function (json_message) {
        var act_list = JSON.parse(localStorage.getItem("activities"));
        var message = json_message.messages[0].message.replace(/\s/g, "");
        //     console.log(act_list[0].apply_list.length)
        var action_list = _.find(act_list, function (act) {
            return act.activity_status == 'true' && message.search(/bm/i) == 0
        })
        if (action_list) {
            var apply_name = message.substr(2).trim()
            var apply_phone = json_message.messages[0].phone
            var apply_array = {'apply_name': apply_name, 'apply_phone': apply_phone}
            for (var j = 0; j < action_list.apply_list.length; j++) {
                if (apply_phone == action_list.apply_list[j].apply_phone) {
                    native_accessor.send_sms(json_message.messages[0].phone, "您已报名成功，请勿重复报名")
                    return
                }
            }
            action_list.apply_list.push(apply_array)
            localStorage.setItem('activities', JSON.stringify(act_list))
            native_accessor.send_sms(json_message.messages[0].phone, "恭喜您已报名成功")
            sign_up_page_refresh()
            function sign_up_page_refresh() {
                var refresh_page = document.getElementById('sign_up_page_id')
                if (refresh_page) {
                    var scope = angular.element(refresh_page).scope();
                    scope.$apply(function () {
                        scope.diaoyong();
                    })
                }

            }
        }
        var activity = _.find(act_list, function (act) {
            return act.bid_status == 'true' && message.search(/jj/i) == 0
        })
        if (activity) {
            var bid_price = message.substr(2)
            var bid_phone = json_message.messages[0].phone
            var act = activity.apply_list
            var bid = activity.bid_list[0].bid_message
            var even = _.find(act, function (apply) {
                return apply.apply_phone == bid_phone
            })
            function refresh() {
                var refresh_page = document.getElementById('page_id')
                if (refresh_page) {
                    var scope = angular.element(refresh_page).scope();
                    scope.$apply(function () {
                        scope.break();
                    })
                }
            }
            if (even) {
                var bid_name = even.apply_name
                var bid_message = {'bid_price': bid_price, 'bid_phone': bid_phone, 'bid_name': bid_name} || []
                if (activity.bid_list[0].bid_message.length == 0) {
                    console.log("3")
                    activity.bid_list[0].bid_message.push(bid_message)
                    localStorage.setItem('activities', JSON.stringify(act_list))
                    native_accessor.send_sms(json_message.messages[0].phone, "恭喜您已竞价成功")
                    refresh()
                }
                if (_.find(bid, function (bid) {
                    return bid.bid_phone == bid_phone
                })) {
                    native_accessor.send_sms(json_message.messages[0].phone, "请勿重复竞价")
                    return
                } else {
                    console.log(bid_message)
                    activity.bid_list[0].bid_message.push(bid_message)
                    localStorage.setItem('activities', JSON.stringify(act_list))
                    native_accessor.send_sms(json_message.messages[0].phone, "恭喜您已竞价成功")
                    refresh()
                }

//            } else {
//                native_accessor.send_sms(json_message.messages[0].phone, "对不起,您没有报名此次活动")
            }
        }
    }
}

function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}


