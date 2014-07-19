/**
 * Created by tlt on 14-7-18.
 */
function Bid(bid_name){
    this.bid_name=bid_name;
    this.bid_phone='bid_phone';
    this.bid_price='bid_price';
}
Bid.activity_current_activity=function(act){
    var action = JSON.parse(localStorage.getItem("activities"))
    var activity=  _.find(action, function (act) {
        return act.name == localStorage.current_activity
        return activity
    })

}
Bid.get_apply_list=function(apply){
    var action = JSON.parse(localStorage.getItem("activities"))
    return _.findWhere(action,{name:apply}).apply_list
}
Bid.get_current_activity=function(action){
    localStorage.setItem('activities', JSON.stringify(action))
}
Bid.save_activity_status=function(status){
    var action = JSON.parse(localStorage.getItem("activities"));
    _.findWhere(action,{name:status}).activity_status="true"
    localStorage.setItem('activities', JSON.stringify(action))
}
Bid.save_activity_status_false=function(status){
    var action = JSON.parse(localStorage.getItem("activities"));
    _.findWhere(action,{name:status}).activity_status="false"
    localStorage.setItem('activities',JSON.stringify(action))
}
//Bid.save_bid_status=function(){
//    var action = JSON.parse(localStorage.getItem("activities"));
//    _.findWhere(action,{name:localStorage.current_activity}.bid_status="true")
//    localStorage.setItem("activities", JSON.stringify(action))
//    var bidding=Bid.check_cruuent_activity()
//    localStorage.bid="竞价" + (bidding.bid_list.length + 1)
//    var bid_name = "竞价" + (bidding.bid_list.length + 1)
//    var bid_list = {'bid_name': bid_name, 'bid_color': 'true', 'bid_message': []}
//    bidding.bid_list.unshift(bid_list)
//    localStorage.setItem('activities', JSON.stringify(action))
//}
Bid.check_current_activity_activity_status=function(){
    var action = JSON.parse(localStorage.getItem("activities"))
  return(  _.find(action, function (act) {
        return act.name == localStorage.current_activity && act.activity_status == 'true'
    }))
}
Bid.check_bid_status=function(){
    var action = JSON.parse(localStorage.getItem("activities"))
    return(_.find(action, function (action) {
        return action.bid_status == 'true'
    }))
}
Bid.check_activity_status=function(){
    var action = JSON.parse(localStorage.getItem("activities"))
    return (_.find(action, function (action) {
        return action.activity_status == 'true'
    }))
}
Bid.check_current_activity_bid_list=function(){
    var action = JSON.parse(localStorage.getItem("activities"))
    return ( _.findWhere(action,{name:localStorage.current_activity}).bid_list)
}
Bid.check_cruuent_activity=function(){
    var action = JSON.parse(localStorage.getItem("activities"))
    return(_.find(action, function (bidding) {
        return bidding.name == localStorage.current_activity
    }))
}
Bid.check_activity_status_length=function(){
    var action = JSON.parse(localStorage.getItem("activities"))
    var bidding=Bid.check_cruuent_activity()
  return(  _.find(action, function (bidding) {
        return bidding.activity_status == 'true' || bidding.length == 0
    }))
}
