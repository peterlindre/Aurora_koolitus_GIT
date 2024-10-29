import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ id: '', name: '', email: '' });

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => setEmployees(json.data || []));
  }, []);

  const addEmployee = () => {
    if (newEmployee.id && newEmployee.name && newEmployee.email) {
      setEmployees((prevEmployees) => [
        ...prevEmployees,
        { id: newEmployee.id, first_name: newEmployee.name, email: newEmployee.email },
      ]);
      setNewEmployee({ id: '', name: '', email: '' }); // Clear the input fields
    }
  };

  const deleteEmployees = (index) => {
    setEmployees((prevEmployees) => prevEmployees.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="container">
        <h2 className="mb-4">Employees</h2>
        <Table className="table table-hover table-bordered table-sortable">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.first_name} {employee.last_name}</td>
                <td>{employee.email}</td>
                <td>
                  <Button onClick={() => deleteEmployees(index)} type="button" variant="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}

            <tr className="input-row">
              <td>
                <input
                  type="text"
                  placeholder="ID"
                  className="form-control"
                  value={newEmployee.id}
                  onChange={(e) => setNewEmployee({ ...newEmployee, id: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={newEmployee.name}
                  onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  value={newEmployee.email}
                  onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                />
              </td>
              <td>
                <Button onClick={addEmployee} type="button" variant="success">Add</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Employees;
