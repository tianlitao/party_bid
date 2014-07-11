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
   //     console.log(act_list[0].apply_list.length)






        for (var i in act_list) {
            if (act_list[i].activity_staus == 'true') {
                var message = json_message.messages[0].message.replace(/\s/g, "");
                if (message.search(/bm/i) == 0) {
                    var apply_name = message.substr(2).trim()
                    var apply_phone = json_message.messages[0].phone
                    var apply_array = {'apply_name': apply_name, 'apply_phone': apply_phone}
                    for (var j = 0; j < act_list[i].apply_list.length; j++) {
                        if (apply_phone == act_list[i].apply_list[j].apply_phone) {
                            native_accessor.send_sms(json_message.messages[0].phone, "您已报名成功，请勿重复报名")
                            return
                        }
                    }
                    act_list[i].apply_list.push(apply_array)
                    //                   console.log(act_list[0].apply_list)

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
                    };

                    break

                    //                    }
                }
//                console.log("1")
//                native_accessor.send_sms(json_message.messages[0].phone, "报名已结束")
//                break

            }
//            else {
//                for (var i in act_list) {
//                    //                 console.log(act_list[i].apply_list.length)
//                    if (!act_list[i].apply_list.length == 0) {
//                        native_accessor.send_sms(json_message.messages[0].phone, "报名已结束")
//                        break
//                    }
            native_accessor.send_sms(json_message.messages[0].phone, "报名已结束")
            break
//                }
//            }
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


