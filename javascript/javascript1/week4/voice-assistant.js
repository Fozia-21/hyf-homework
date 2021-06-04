
let nameArray = [];
let todoArray = [];

function getReply(command)
{
    const wordString = command.split(" "); 
    const keyWord = wordString[0];  // extract the keyword

    let nameCommand;

    switch(keyWord.toLowerCase()){
        //--------------------------------------------------------------//
        case 'hello':
            nameCommand = wordString[4]; // extract the name (as it is on 4th index)
            if(!nameCommand)
            {
                console.log('please enter your name');
            }
            else
            {    
                // compare with name array and add if not exist or skip if its already exist
                if(nameArray.includes(nameCommand.toLowerCase()) )
                {
                    console.log('Name already exists, so skipping it');
                }
                else
                {
                    console.log('name do not exists, so adding to the list');
                    nameArray.push(nameCommand.toLowerCase()); // add to the array
                    console.log(`Nice to meet you:  ${nameCommand} !`);
                  }
        
            }
            break;

        //--------------------------------------------------------------
            case 'add':    
                
                if(wordString.length > 4)
                {
                    todoTask = wordString;
                    todoTask.splice(0, 1); // remove first element
                    todoTask.splice(-2);
                    todoTask = todoTask.join(' '); // combine element to form the string
                }
                else
                {
                    todoTask = wordString[1];
                }

                todoArray.push(todoTask.toLowerCase());
                console.log(`Added ${todoTask} to myToDo`);
                break;

            case 'remove':    
                if(wordString.length > 4)
                {
                    todoWords = wordString;
                    todoWords.splice(0, 1); // remove first element
                    todoWords.splice(-2);
                    todoWords = todoWords.join(' '); // combine element to form the string
                }
                else
                {
                    todoWords = wordString[1];
                }

                 // check if the item is in the list, before removing it.If exists then remove it.
                if(todoArray.includes(todoWords.toLowerCase()))
                {
                   const itemIndex = todoArray.indexOf(todoWords);
                    todoArray.splice(itemIndex, 1) ; 
                    console.log(`${todoWords} is removed from myToDo`);              
                }
                else 
                {    
                    // if not in the list, print invalid item to be removed
                    // if item exist in the list, remove it :-) 
                    console.log(`Invalid item to be removed`);
                }
                break;

            
            //----------------------------------
            case 'what':    
                nameCommand = wordString;
                nameCommand.splice(0, 1); // remove first element
            
                nameCommand = nameCommand.join(' '); // combine element to form the string

                if(nameCommand == 'is my name?')
                {
                    if(nameArray.length) 
                    {
                        console.log(`your name is: ${nameArray}`)   
                    }
                    else
                    {
                        console.log('No name exist !');
                        
                    }
                }
                else if(nameCommand == 'is on myToDo?')
                {
                   console.log(`ToDo is: ${todoArray}`);  
                }
                else if(nameCommand == 'day is today?')
                {
            
                    const date = new Date().toDateString().split(" ");
                    console.log(`${date[2]} of ${date[1]} ${date[3]}`);
                }
                else
                {
                    // mathematic operations              
                    const [ , operandA, operator, operandB ] = wordString; 
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
                        console.log(`invalid command !`); 
                        break;  
                    }
                }           
                break;

            //-----------------------------------------
            case 'set':  
                const [ , first, second, , forth, fifth ] = wordString; 
                      
                if( [first, ' ', second].join('') == 'a timer')
                {
                    let units = fifth; 
                    let timervalue = forth; 
                    console.log(`Timer set for ${timervalue} ${units}`);  
                    console.log('Waiting for time out ....'); 
                    
                    let timeout;
                    if((units == 'seconds') || (units == 'sec') )
                    {
                        timeout = timervalue *1000;  // represented a milliseconds
                    }    
                    else if((units == 'minutes') || (units == 'mins') )
                    {
                        timeout = timervalue * 1000 * 60;  // represented a milliseconds
                    }

                    setTimeout(function(){ console.log("Timer done"); }, timeout);

                }
                break;

            //--------------------------------------------------------------
            default:
                console.log("what it is ?"); 
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