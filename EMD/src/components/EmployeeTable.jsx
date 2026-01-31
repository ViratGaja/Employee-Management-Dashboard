import React, { useState } from 'react'
import { useEmployees } from '../context/EmployeeContext'
import '../components/style.css'

const EmployeeTable = () => {
  const { employees, deleteEmployee, setEditEmployee } = useEmployees()
  const [searchTerm, setSearchTerm] = useState('')

  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee => {
    const searchLower = searchTerm.toLowerCase()
    return (
      employee.name.toLowerCase().includes(searchLower) ||
      employee.gender.toLowerCase().includes(searchLower) ||
      (employee.active ? 'active' : 'inactive').includes(searchLower)
    )
  })

  return (
    <div>
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, gender, or status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

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
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map(data => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.gender}</td>
                <td>{data.active ? "Active" : "Inactive"}</td>
                <td>
                  <button 
                    className='action-btn edit-btn' 
                    onClick={() => setEditEmployee(data)}
                  >
                    Edit
                  </button>
                  <button 
                    className="action-btn delete-btn" 
                    onClick={() => deleteEmployee(data.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable
