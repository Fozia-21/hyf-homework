const activities = [];
function addActivity(date, activity, duration) {
activities.push( 
    {
       date, activity, duration // this is the same as { date: date, activity: activity, duration: duration }
    }
  );
}
console.log(activities);

//calling function for adding activities in Array
addActivity("23/7-2021" ,"Youtube " , 30)
addActivity("25/7-2021" ,"Facebook " , 15)
addActivity("2/8-2021" ,"TikTok" , 25)
addActivity("3/7-2021" ,"whattsapp" , 15)
addActivity("6/8-2021" ,"Instagram" , 40)

//show Status
function showStatus(activities)
{
  let sumOfActivitiesDuration = 0;
  for(let i = 0 ; i < activities.length ;i++) 
  {
      sumOfActivitiesDuration += activities[i].duration;
  } 
  return sumOfActivitiesDuration;
}
let result = showStatus(activities);
console.log(`You have added ${activities.length} activities. They amount to ${result} min. of usage`);

//usage Limit
const limit = 150;
function limitOfUse()
{
if(result > limit)
 {
console.log("limit exceeded , NO more phone is allowed");
 }


//Extra Feature
    else(result < limit)
      {
        console.log("You still have limit, so more activities are allowed");
      }
 limitOfUse();


}
