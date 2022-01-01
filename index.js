// Write your solution in this file!
const employee = {
    name: "tim",
    streetAddress: 1295
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key]
    return newObj
};

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    
    delete employeeObject[key]
    return employeeObject
};



