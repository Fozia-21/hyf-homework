//Declaring all variables
let width;
let height;
let depth;
let volumeInMeters;
let gardenSizeInM2;
let paidPrice;
let peterActualHouseCost;
let juliaActualHouseCost;

//peter House Price
width = 8;
height = 10;
depth = 10;
gardenSizeInM2 = 100;
volumeInMeters = width*height*depth;
paidPrice = volumeInMeters*2.5*1000 + gardenSizeInM2*300;
console.log("peter has paid:"+" "+paidPrice);

peterActualHouseCost = 2500000;
//comparing Paid and actual price of house

if(paidPrice < peterActualHouseCost ){
    console.log("Peter is paying too less")
}
else{
    console.log("Peter is paying too much")
}


//Julia paid price
width = 5;
height = 8;
depth = 11;
gardenSizeInM2 = 70;
volumeInMeters = width*height*depth;
paidPrice = volumeInMeters*2.5*1000 + gardenSizeInM2*300;
console.log("Julia has paid:"+" "+paidPrice);

//Initializing and assigning value to variable
juliaActualHouseCost = 1000000;

//comparing Paid and actual price of house
if(paidPrice < juliaActualHouseCost ) {
    console.log("Julia is paying too less");
}
else{
    console.log("Julia is paying too much");
}


