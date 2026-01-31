import '../components/style.css'
import { useEmployees } from "../context/EmployeeContext";
import { useEffect, useState } from "react";

const EmployeeForm = () => {
  const { addEmployee, editEmployee,
    updateEmployee } = useEmployees();
  const [form, setForm] = useState({ name: "", gender: "", active: true });
  useEffect(() => {
    if (editEmployee) {
      setForm(editEmployee)
    }
  }, [editEmployee])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      updateEmployee(form)
    }
    else {
      addEmployee(form)
    }
    setForm({ id: null, name: "", gender: "", active: true });
  };

  return (
    <form className="emp-form" onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      <input
        placeholder="Full Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <select
        value={form.gender}
        onChange={e => setForm({ ...form, gender: e.target.value })}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

     <div className="checkbox-row">
  <input
    type="checkbox"
    checked={form.active}
    onChange={(e) =>
      setForm({ ...form, active: e.target.checked })
    }
  />
  <label>Active</label>
</div>




      <button type="submit">
        {form.id ? "Update" : "Save"}
      </button>
    </form>
  );
};

export default EmployeeForm;
