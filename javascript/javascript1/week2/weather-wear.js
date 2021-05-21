function whatToWear(temperature)
{
    if(temperature >= 30) 
    {
    return `Too hot,wear t-shirts and shorts`;
    }
    else if(temperature < 30 && temperature > 15) 
     {
     return `Wear shirts and pants`;
     }
    else if(temperature < 15 && temperature > 10)
     {
     return `Wear Sweaters`;
    }
    else if(temperature < 10 && temperature > 1)
    {
     return`Wear jackets`;
    }
    else if(temperature <= 1 && temperature > -10)
    {
     return`Too cold ,Wear warm clothes and warm jackets`;
    }
    else
    {
    return`Too hot / too cold`;
    }
}
//const clothesToWear = whatToWear();


const clothesToWear1 = whatToWear(20);
console.log(clothesToWear1);
const clothesToWear2 = whatToWear(2);
console.log(clothesToWear2);
const clothesToWear3 = whatToWear(-5);
console.log(clothesToWear3);
const clothesToWear4 = whatToWear(25);
console.log(clothesToWear4);
const clothesToWear5 = whatToWear(40);
console.log(clothesToWear5);
const clothesToWear6 = whatToWear(-15);
console.log(clothesToWear6);
const clothesToWear7 = whatToWear(9);
console.log(clothesToWear7);






