const class07Students = [];
function addStudentToClass(studentName){
    if(class07Students.length ===6 && studentName!=="Queen")
       { return console.log(`Can not  add  more students to class 07`);
    }
    else if(class07Students.includes(studentName)){
       return console.log(`Student ${studentName} is already in the class`); 
    }
    else if(studentName==="Queen"){
    class07Students.push(studentName)
   return console.log(`${studentName} can be added to class 07`);
}
    

    else if(studentName===" "){
        return console.log(`You can not add empty string to the calss`)
    }
    else{
     console.log(class07Students.push(studentName));
    }
}
addStudentToClass("Fozia");
addStudentToClass("Fozia");//this name already in calss 07
addStudentToClass("Izzah");
addStudentToClass("Aiza");
addStudentToClass("Queen");//queen can be added Always
addStudentToClass(" ");//empty strings can't be added
addStudentToClass("Maria");
addStudentToClass("Saira");
addStudentToClass("Aisha");

console.log(class07Students);


function getNumberOfStudents(){
return console.log(`Max Number of students in class 07 is ${class07Students.length} but Queen can be added`);
}
getNumberOfStudents();