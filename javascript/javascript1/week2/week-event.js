function getEventWeekday(noOfEventDays)
{
    const WeekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const today = new Date();
    const futureEventDay = (today.getDay() + noOfEventDays) % 7;
     return WeekDays[futureEventDay];
}
 console.log(getEventWeekday(6));