/**
 * Created by tlt on 14-7-18.
 */
function Bid(bid_name){
    this.bid_name=bid_name;
    this.bid_phone='bid_phone';
    this.bid_price='bid_price';

}
Bid.activity_current_activity=function(){
    var action = JSON.parse(localStorage.getItem("activities"))
    return(  _.find(action, function (act) {
        return act.name == localStorage.current_activity
 //       return activity
    }))
}
Bid.get_apply_list=function(apply){
    var action = JSON.parse(localStorage.getItem("activities"))
    return _.findWhere(action,{name:apply}).apply_list
}
Bid.check_crruent_activity=function(){
    var action = JSON.parse(localStorage.getItem("activities"))
    return _.findWhere(action,{name:localStorage.current_activity}).bid_list
}
Bid.check_current_activity_bid=function(){
    var act=Bid.check_crruent_activity()
    return _.findWhere(act,{bid_name:localStorage.bid}).bid_message
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
//Bid.save_bid_status_bid_messaage=function(){
//    var action = JSON.parse(localStorage.getItem("activities"));
//    _.findWhere(action,{name:localStorage.current_activity}).bid_status="true"
////   console.log(_.findWhere(action,{name:localStorage.current_activity}))
// //   console.log(action)
//    console.log("1")
//    localStorage.setItem("activities", JSON.stringify(action))
//    // var actio = JSON.parse(localStorage.getItem("activities"));
//    var bidding=Bid.check_current_activity()
//    console.log("2")
//    localStorage.bid="竞价" + (bidding.bid_list.length + 1)
//    var bid_name = "竞价" + (bidding.bid_list.length + 1)
//    var bid_list = {'bid_name': bid_name, 'bid_color': 'true', 'bid_message': []}
//    console.log("3")
//    bidding.bid_list.unshift(bid_list)
//    localStorage.setItem('activities', JSON.stringify(bidding))
//    console.log("4")
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
Bid.check_current_activity=function(){
    var action = JSON.parse(localStorage.getItem("activities"))
    return(_.find(action, function (bidding) {
        return bidding.name == localStorage.current_activity
    }))
}
Bid.check_activity_status_length=function(){
    var action = JSON.parse(localStorage.getItem("activities"))
    var bidding=Bid.check_current_activity()
  return(  _.find(action, function (bid) {
        return bid.activity_status == 'true' || bidding.length == 0
    }))
}
Bid.check_current_bid=function(){
    var action=JSON.parse(localStorage.getItem("activities"))
    return(_.find(action,function(action){
        return action.bid_list[0].bid_name==localStorage.bid
    }))
}
//Bid.check_status=function(){
//    if( Bid.check_cruuent_activity() && Bid.check_bid_status() && Bid.check_current_bid())
//    return true;
//    return false;
//}
Bid.refresh=function(){
    var refresh_page = document.getElementById('id')
    if (refresh_page) {
        var scope = angular.element(refresh_page).scope();
        scope.$apply(function () {
            scope.refreshes();
        })
    }
}
Bid.save_bid_status=function(){
    var action = JSON.parse(localStorage.getItem("activities"));
    _.findWhere(action,{name:localStorage.current_activity}).bid_status="false"
    localStorage.setItem('activities', JSON.stringify(action))

}
Bid.check_bid_price_bid_count=function(){
    var bid_price = JSON.parse(localStorage.getItem("bid_price"))
    return (_.find(bid_price, function (bid) {
        return bid.count == 1
    }))
}
Bid.check_bid_messages_bid_price=function(){
    var bidding = Bid.check_current_activity()
    var bids=Bid.check_bid_price_bid_count()
    var bid_message = bidding.bid_list[0].bid_message
    return (_.find(bid_message, function (bid) {
        return bid.bid_price == bids.price
    }))
}
Bid.save_bid_price=function(){
    var bidding=Bid.check_current_activity_bid()
    var count = _.countBy(bidding, function (bidding) {
        return bidding.bid_price
    })
    var coun = _.map(count, function (value, key) {
        return {"price": key, "count": value}
    })
    localStorage.setItem("bid_price", JSON.stringify(coun))
}
Bid.display_sortby=function(){
    var bidding=Bid.check_current_activity_bid()
    return(_.sortBy(bidding, function (bidding) {
        return bidding.bid_price }))
}
Bid.check_current_activity_save_bid_color=function(){
    Bid.refresh()
    Bid.save_bid_status()
    var bidding = JSON.parse(localStorage.getItem("activities"))
  var bid=  _.findWhere(bidding,{name:localStorage.current_activity}).bid_list
  _.findWhere(bid,{bid_name:localStorage.bid}).bid_color="false"
    localStorage.setItem("activities",JSON.stringify(bidding))
}
Bid.check_bid_start=function($scope){
    if (Bid.check_current_activity() && Bid.check_bid_status() && Bid.check_current_bid()) {
        $scope.bid_start = false
    }
}
Bid.current_display_bid_messages=function($scope){
    if(Bid.check_bid_price_bid_count() && Bid.activity_current_activity() && Bid.check_bid_messages_bid_price()){
        $scope.success = "true"
        $scope.fail = "false"
        $scope.bid_name = Bid.check_bid_messages_bid_price().bid_name
        $scope.price = Bid.check_bid_messages_bid_price().bid_price
        $scope.phone = Bid.check_bid_messages_bid_price().bid_phone
    }
}
Bid.judge_check_bid_price_bid_count=function($scope){
    if(!Bid.check_bid_price_bid_count()){
        $scope.success = "false"
        $scope.fail = "true"
    }
}
Bid.judege_check_current_activity_activity_status=function($scope){
    if (Bid.check_current_activity_activity_status()) {
        $scope.apply_status = "1"
    }
}
Bid.judge_check_bid_status_activity_status=function($scope){
    if (Bid.check_bid_status()) {
        $scope.disabled = true
    }
    if(Bid.check_bid_status() && Bid.check_activity_status()){
        $scope.disabled = true
    }
    if(Bid.check_bid_status() && !Bid.check_activity_status()){
        $scope.disabled = false
    }
}
Bid.judge_check_bid_status=function($scope){
    if (Bid.check_bid_status()) {
        $scope.bid_start = true
    }
}
Bid.judge_check_activity_status_length=function($scope){
    if (Bid.check_activity_status_length()) {
        $scope.bid_start = true
    }
}
Bid.judge_check_bid_price_bid_count_current_activity_bid_messages_bid_price=function($scope){
    if(Bid.check_bid_price_bid_count() && Bid.check_current_activity() && Bid.check_bid_messages_bid_price()){
        var bid_messages =Bid.check_bid_messages_bid_price()
        $scope.success = "true"
        $scope.fail = "false"
        $scope.bid_name = bid_messages.bid_name
        $scope.price = bid_messages.bid_price
        $scope.phone = bid_messages.bid_phone
    }else{
        $scope.success = "false"
        $scope.fail = "true"
    }
}










