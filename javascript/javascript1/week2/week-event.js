function getEventWeekday(noOfEventDays)
{
    const today = new Date();
    const futureEventDay= (today.getDay() + noOfEventDays) % 7;
    console.log(futureEventDay);
    const WeekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    console.log(`${WeekDays[futureEventDay]}`);
}
 getEventWeekday(5);