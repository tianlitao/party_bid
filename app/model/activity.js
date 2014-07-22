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
Activity.save_message=function(activity){
    var activities = JSON.parse(localStorage.getItem("activities"));
    activities.unshift(activity)
    localStorage.setItem("activities", JSON.stringify(activities))

}
Activity.save_current_activity=function(){
    var activities = JSON.parse(localStorage.getItem('activities'))
    localStorage.current_activity = activities[0].name
}
Activity.save_click_activity=function(activity){
    var activities = JSON.parse(localStorage.getItem('activities'))
    localStorage.current_activity = activity
}
Activity.get_activities=function(){
   return JSON.parse(localStorage.getItem('activities'))
}
Activity.check_rename=function($scope){
    var activities = JSON.parse(localStorage.getItem("activities"));
    return(_.find(activities, function (act) {
        return act.name == $scope.activity
    }))
}
Activity.judge_check_rename=function($scope){
    var activity = new Activity($scope.activity);
    if(Activity.check_rename($scope)){
        $scope.hide = 1
    }
    if(!Activity.check_rename($scope)){
        Activity.save_message(activity)
        Activity.save_current_activity()
    }
}




