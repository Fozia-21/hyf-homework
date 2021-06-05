function countDanishLetters(wordString) 
{
     
    let char;
    let char1=0, char2=0, char3=0;

    for (let i=0;i<wordString.length;i++)
    {
            char = wordString.slice(i,i+1);
            
            switch(char.toLowerCase())
            {
            case 'å':
            char1++; 
            break;
            
            case 'ø':
            char2++; 
            break;

            case 'æ':
            char3++; 
            break;

            }
    }

    console.log(`Total: ${char1 + char2 + char3}`);
    console.log(`å: ${char1}`);
    console.log(`ø: ${char2}`);
    console.log(`æ: ${char3}`);
    
    return ' ';  
}
const danishString = "Jeg har en blå bil";
console.log(countDanishLetters(danishString));

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetters(danishString2));