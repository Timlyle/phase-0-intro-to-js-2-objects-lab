const employee = {employee:"Tim", streetAddress:"1495 5th ave"}


function updateEmployeeWithKeyAndValue(employee01, key, value){
    const newObj = {...employee01}
    newObj[key] = value;
     return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(nuObject, key, value) {
    nuObject[key] = value; 
  
    return nuObject;
}



function deleteFromEmployeeByKey(employeebject, key){
    const bobject = {...employeebject}
    delete bobject[key];
    return bobject;
};  

function destructivelyDeleteFromEmployeeByKey(remployee, key){
        const delebject = {remployee}
        delete remployee[key];
        return remployee;
    };





/*this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!

































/*const employee =  {name: "Tim", streetAddress: "15 easy street"};
//updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    const newObject = { ...employeeObj};
    newObject[key] = value;
    return newObject;
}

//destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
function destructivelyUpdateEmployeeWithKeyAndValue(nuObject, key, value) {
    nuObject[key] = value; 
  
    return nuObject;
}
// deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!
function deleteFromEmployeeByKey(employeeObj, key) {
    const nuuEmpObj = {...employeeObj}
    delete nuuEmpObj[key];
    
    return nuuEmpObj;
}
/*deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!
function destructivelyDeleteFromEmployeeByKey(employeeObj, key){
    delete employeeObj[key];
    return employeeObj
};*/


