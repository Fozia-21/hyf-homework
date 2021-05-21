const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
    {
      title: "Haunted",
      days: 0,
      hours: 7,
      minutes: 30,
    },
    {
      title: "The Crown",
      days: 1,
      hours: 18,
      minutes: 10,
    }
    ];
  let lifeSpanInMins = 80 * 365 * 24 * 60;
   let totalTimeSpent = 0;

   function logOutSeriesText(seriesDurations) 
   {
    for(let i = 0; i < seriesDurations.length; i++)
     {
        let timeInMinutes = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60)
                            + (seriesDurations[i].minutes);

        const durationInPercentage = (timeInMinutes * 100 ) / lifeSpanInMins ;

        console.log(`${seriesDurations[i].title} took ${durationInPercentage.toFixed(3)}% of my life`);

        totalTimeSpent = totalTimeSpent + durationInPercentage;
     }
      console.log(`Total time spent in watching Series is : ${totalTimeSpent.toFixed(3)}% of my life.`);
   }
  logOutSeriesText(seriesDurations);
 

  