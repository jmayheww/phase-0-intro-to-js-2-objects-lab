// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '911 Federal Ave'
};

employee.name = 'Josh';


function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj };
    newObj[key] = value;
    return newObj;
}

const updateEmployee = updateEmployeeWithKeyAndValue(
    employee,
    'streetAddress',
    '11 Broadway'
);

newEmployee.streetAddress;

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    'streetAddress',
    '12 Broadway'
 );

 function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
 }

 const newEmployee = deleteFromEmployeeByKey(
    employee,
    'name'
 );


 function destructivelyDeleteFromEmployeeByKey(obj, key) {
   delete obj[key];
   return obj;

 }

 destructivelyDeleteFromEmployeeByKey(
    newEmployee,
    'name'
    );