const notes = [];

function saveNote(content, id) 
{
 const note = {
     content,id
  };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Cook food", 3);
saveNote("Make dessert", 4);

console.log(notes);  /*[{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]
[{content: 'Cook food', id: 1}, {content: 'Make dessert', id: 2}]  */

function getNote(id) 
{
    for(let i = 0; i < notes.length; i++)
    {
       if(notes[i].id === id) 
       {
          return notes[i];
       }
    }
        return `Note with ID 1 couldn't be found`;
}
  
  let firstNote = getNote(1);
  console.log(firstNote); // {content: 'Pick up groceries', id: 1}
  firstNote = getNote(2);
  console.log(firstNote); // {content: 'Do laundary', id: 2}
  firstNote = getNote(5);
  console.log(firstNote); // irrelevant note object

  function logOutNotesFormatted() 
  {
    for(let i = 0; i< notes.length; i++) 
    {
        console.log(`the note with ${notes[i].id} has the following note text: ${notes[i].content}`);
    }

  }
  
  logOutNotesFormatted(); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry
  
  

  


