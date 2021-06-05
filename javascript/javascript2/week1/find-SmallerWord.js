let danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function findSmallerWord(danishWords)
{
    let wordLength;
    let wordIndex;
    let minWordLength = 256;  // choose a max number
    for (let i = 0; i < danishWords.length; i++)
    {
        wordLength = danishWords[i].length;
        
        if(wordLength < minWordLength)
        {
            minWordLength = wordLength;  // store the minimum length
            wordIndex = i; // store the index of the smaller word
        }
    }
  
    console.log(danishWords[wordIndex]);
    console.log(minWordLength);

    return ' ';
}
console.log(findSmallerWord(danishWords));
