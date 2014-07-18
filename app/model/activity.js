/**
 * Created by tlt on 14-7-16.
 */
function Activity (name){
    this.name=name;
    this.activity_status='false';
    this.apply_list=[];
    this.bid_status='false';
    this.bid_list=[]
}
Activity.check_activity_list_exist=function(){
return localStorage.getItem('activities')
}
//Activity.activity_name_repeat=function(){
//    var activities=JSON.parse(localStorage.getItem("activities"))
//    return _.find(activities,function(act){  return act.name==this.name })
//}
Activity.save_message=function(activity){
    var activities = JSON.parse(localStorage.getItem("activities")) || [];
    activities.unshift(activity)
    localStorage.setItem("activities", JSON.stringify(activities))

}
Activity.save_current_activity=function(){
    var activities = JSON.parse(localStorage.getItem('activities'))
    localStorage.current_activity = activities[0].name
}