import React from 'react'
import { useEmployees } from '../context/EmployeeContext'
import '../components/style.css'
const EmployeeTable = () => {
  const { employees, deleteEmployee, setEditEmployee } = useEmployees()
  return (
    <div>
      <table className='emp-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(data => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.gender}</td>
              <td>{data.active ? "Active" : "Inactive"}</td>
              <td>
                <button className='action-btn edit-btn' onClick={() => setEditEmployee(data)}>Edit</button>
                <button className="action-btn delete-btn" onClick={() => deleteEmployee(data.id)}>
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable