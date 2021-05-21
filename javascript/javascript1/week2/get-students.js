const class07Students = [];
function addStudentToClass(studentName)
{
    if(class07Students.length === 6 && studentName!=="Queen")
       { 
           console.log(`Can not  add  more students to class 07`);
       }
      else if(class07Students.includes(studentName))
          {
           console.log(`Student ${studentName} is already in the class`);
          }
      else  if(studentName === "")
          {
        console.log(`You can not add empty string to the calss`);
          }
    
     console.log(class07Students.push(studentName));
} 
addStudentToClass("Fozia");
addStudentToClass("Fozia");   //this name already in calss 07
addStudentToClass("Izzah");
addStudentToClass("Aiza");
addStudentToClass("Queen");  //queen can be added Always
addStudentToClass("");       //empty strings can't be added
addStudentToClass("Maria");
addStudentToClass("Saira");
addStudentToClass("Aisha");

console.log(class07Students);

function getNumberOfStudents()
{
console.log(`Max Number of students in class 07 is ${class07Students.length} but Queen can be added`);
}
getNumberOfStudents();
