
let nameArray = [];
let todoArray = [];

function getReply(command)
{
    let wordString = command.split(" "); 
    let KeyWord = wordString[0];  // extract the keyword
    let nameString;
    let nameString2;

    switch(KeyWord){
        //--------------------------------------------------------------//
        case 'Hello':
            nameString = wordString[4]; // extract the name (as it is on 4th index)
            if(nameString == '')
            {
                console.log('please enter your name');
            }
            else
            {    
                // compare with name array and add if not exist or skip if its already exist
                if(nameArray.includes(nameString.toLowerCase()) )
                {
                    console.log('Name already exists, so skipping it');
                }
                else
                {
                    console.log('name do not exists, so adding to the list');
                    nameArray.push(nameString.toLowerCase()); // add to the array
                    console.log(`Nice to meet you:  ${nameString} !`);
                    //console.log(`Total Names in the array ${nameArray.length}`);  
                }
        
            }
            break;

        //--------------------------------------------------------------

            case 'Add':    
                
                if(wordString.length > 4)
                {
                    nameString2 = wordString;
                    nameString2.splice(0, 1); // remove first element
                    nameString2.splice(-1, 1); // remove last element
                    nameString2.splice(-1, 1); // remove 2nd last element, whih is infact last now
                    nameString2 = nameString2.join(' '); // combine element to form the string
                }
                else
                {
                    nameString2 = wordString[1];
                }

                todoArray.push(nameString2.toLowerCase());
                console.log(`Added ${nameString2} to myToDo`);
                //console.log(`Total items in the ToDo  ${todoArray.length}`);
                break;

            case 'Remove':    
                if(wordString.length > 4)
                {
                    nameString2 = wordString;
                    nameString2.splice(0, 1); // remove first element
                    nameString2.splice(-1, 1); // remove last element
                    nameString2.splice(-1, 1); // remove 2nd last element, whih is infact the last now
                    nameString2 = nameString2.join(' '); // combine element to form the string
                }
                else
                {
                    nameString2 = wordString[1];
                }

                 // check if the item is in the list, before removing it.If exists then remove it.
                if(todoArray.includes(nameString2.toLowerCase()))
                {
                    itemIndex = todoArray.indexOf(nameString2);
                    todoArray.splice(itemIndex, 1) ; 
                    console.log(`${nameString2} is removed from myToDo`);              
                }
                else 
                {    
                    // if not in the list, print invalid item to be removed
                    // if item exist in the list, remove it :-) 
                    console.log(`Invalid item to be removed`);
                }
                break;

            
            //----------------------------------
            case 'What':    
                nameString2 = wordString;
                nameString2.splice(0, 1); // remove first element
                nameString2 = nameString2.join(' '); // combine element to form the string

                if(nameString2 == 'is my name?')
                {
                    if(nameArray == ' ') 
                    {
                        console.log('No name exist !');
                    }
                    else
                    {
                        console.log(`your name is: ${nameArray}`)  
                    }
                }
                else if(nameString2 == 'is on myToDo?')
                {
                   console.log(`ToDo is: ${todoArray}`);  
                }
                else if(nameString2 == 'day is today?')
                {
            
                    const date = new Date().toDateString().split(" ");
                    console.log(`${date[2]} of ${date[1]} ${date[3]}`);
                }
                else
                {
                    // mathematic operations
                    let operator = wordString.slice(-2,-1);  // get the maths operator
                    let operandA = parseInt(wordString.slice(-3,-2));
                    let operandB = parseInt(wordString.slice(-1));
                    let result;
                    switch (operator[0])
                    {
                        case '+' :
                        result  = operandA + operandB;
                        console.log(`Result is: ${result}`);  
                        break;

                        case '-' :
                        result  = operandA - operandB;
                        console.log(`Result is: ${result}`);  
                        break;
                        
                        case '*' :
                        result  = operandA * operandB;
                        console.log(`Result is: ${result}`);  
                        break;
                         
                        case '/' :
                        result  = operandA / operandB;
                        console.log(`Result is: ${result}`);  
                        break;

                        case '%' :
                        result  = operandA % operandB;
                        console.log(`Result is: ${result}`);  
                        break;

                        default:
                        console.log('Invalid command !');  
                        break;  
                    }
                }           
                break;

            //-----------------------------------------
            case 'Set':  
                nameString2 = wordString.slice(1, 3); // get keyword like 'a timer'
                nameString2 = nameString2.join(' '); // combine element to form the string
                
                if(nameString2 == 'a timer')
                {
                    let units = wordString.slice(-1); 
                    let timervalue = wordString.slice(-2,-1);  
                    console.log(`Timer set for ${timervalue} ${units}`);  
                    console.log('Waiting for time out ....'); 
                    
                    let timeout;
                    if((units='seconds') || (units='sec') )
                    {
                        timeout = timervalue *1000;  // represented a milliseconds
                    }    
                    else if((units = 'minutes') || (units = 'mins') )
                    {
                        timeout = timervalue * 1000 * 60;  // represented a milliseconds
                    }

                    setTimeout(function(){ console.log("Timer done"); }, timeout);

                }
                break;



            //--------------------------------------------------------------
            default:
                console.log('invalid command'); 
                break;
            
    } // end switch

    return ' ';
} // end function
    


console.log(getReply("Hello My name is Fozia"));
console.log(getReply("Hello My name is fozia"));
console.log(getReply("Hello My name is Hadi"));
console.log(getReply("Hello My name is  "));
console.log(getReply("What is my name?"));


console.log(getReply("Add fishing to myTodo"));
console.log(getReply("Add Singing in the shower to myTodo"));
console.log(getReply("Remove fishing from myTodo"));

console.log(getReply("Add groceries from supermarket to myTodo"));
console.log(getReply("Add cycling to myTodo"));
console.log(getReply("Remove fishing to myTodo"));
console.log(getReply("What is on myToDo?"));

console.log(getReply("What day is today?"));

console.log(getReply("What is 2 - 3"));

console.log(getReply("Set a timer for 5 sec"));