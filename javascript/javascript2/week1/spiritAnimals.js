const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')

button1.addEventListener('click', onClick)
button2.addEventListener('mouseover', mouseOver)

const spiritAnimals =['Horse', 'Cat', 'Dog', 'Owl', 'Elephant', 'Eagle', 'Crow', 'Rabbit', 'Cow', 'Monkey'];


function onClick() 
{
   let index = Math.floor(Math.random() * 10);
   let inputName = document.getElementById("name1").value;

   if(!inputName)
   {
      document.getElementById("output1").innerText = 'please enter a name';
   }
   else
   {
      document.getElementById("output1").innerText =  inputName + ' - ' + spiritAnimals[index] ;
   }

   return;
}

  


function mouseOver()
{
      let index = Math.floor(Math.random() * 10);
      let inputName = document.getElementById("name2").value;

      if(!inputName)
      {
         document.getElementById("output2").innerText  = 'please enter a name';
      }
      else
      {
        document.getElementById("output2").innerText  =  inputName + ' - ' + spiritAnimals[index];
      }

   return;
}
