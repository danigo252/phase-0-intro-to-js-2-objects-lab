// Write your solution in this file!
const employee =
  {
    "name": "Daniel",
    "streetAddress": "218 Murray Street"
  };

function updateEmployeeWithKeyAndValue(employee, key, value)
{
  const NewEmployee = {...employee};
  NewEmployee[key] = value;

  return NewEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
  employee[key] = value;

  return employee;

}

function deleteFromEmployeeByKey(employee, key)
{
  const NewEmployee ={...employee};

  delete NewEmployee[key];

  return NewEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
  delete employee[key];

  return employee;

}
