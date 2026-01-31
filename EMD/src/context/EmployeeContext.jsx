import { createContext, useContext, useState, useEffect } from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem("employees")) || []);
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem("employees", JSON.stringify(data));
  };

  const addEmployee = (emp) => {
    const updated = [...employees, { ...emp, id: Date.now() }];
    setEmployees(updated);
    saveToStorage(updated);
  };

  const updateEmployee = (emp) => {
    const updated = employees.map(e =>
      e.id === emp.id ? emp : e
    );
    setEmployees(updated);
    saveToStorage(updated);
    setEditEmployee(null);
  };

  const deleteEmployee = (id) => {
    const updated = employees.filter(e => e.id !== id);
    setEmployees(updated);
    saveToStorage(updated);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        editEmployee,
        setEditEmployee
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);
