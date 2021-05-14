function getFullname(firstname,surname,useFormalName,gender)
{
if(useFormalName===true)
{ 
    if(gender==='male'){
    return  'Lord'+" "+firstname+" "+surname}//for males only
}
else if(gender==='female')
{  return  'Ms'+" "+firstname+" "+surname}//if gender is female
else{

return firstname+" "+surname
}
}
fullname1 = getFullname('Fozia','Mehmood',false,'female');
fullname2 = getFullname('Humaira','Habib',false);
const fullname3 = getFullname('Hadi','Mehmood',true,'male');
const fullname4 = getFullname('','',true,'male');
const fullname5 = getFullname('','',false,'female');
const fullname6 = getFullname('John','Charles',true,'male');

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);
console.log(fullname5);
console.log(fullname6);