const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function getTime()
  {
      const time= (travelInformation.destinationDistance/travelInformation.speed);
      const hours= Math.floor(time);
      const minutes= Math.round((time-hours) * 60);
      return `${hours}hrs and ${minutes}mins`;
  }
  const travelTime = getTime(travelInformation);
  console.log(`${travelTime}`);