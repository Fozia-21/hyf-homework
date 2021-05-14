function weatherChange(temperature){
    if(temperature>=30){
    return console.log("Too hot,wear t-shirts and shorts");
}
    else if(temperature<30 && temperature>15){
        return console.log("Wear shirts and pants");

    }
    else if(temperature<15 && temperature>10){
        return console.log("Wear Sweaters");
    }
    else if(temperature<10 && temperature>1){
        return console.log("Wear jackets");
    }
    else if(temperature<1 && temperature>-10){
        return console.log("Too cold ,Wear warm clothes and warm jackets");
    }
    else{
        console.log("Too hot/ too cold");
    }

}
const clothesToWear1=weatherChange(20);
const clothesToWear2=weatherChange(0);
const clothesToWear3=weatherChange(-5);
const clothesToWear4=weatherChange(25);
const clothesToWear5=weatherChange(40);
const clothesToWear6=weatherChange(-15);
const clothesToWear7=weatherChange(9);
