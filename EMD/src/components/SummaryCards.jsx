import { useEmployees } from "../context/EmployeeContext";
import '../components/style.css'
const SummaryCards = () => {
  const { employees } = useEmployees();
  const active = employees.filter(e => e.active).length;

  return (
     <div className="summary-cards">
      <div>Total Employees<br />{employees.length}</div>
      <div>Active<br />{active}</div>
      <div>Inactive<br />{employees.length - active}</div>
    </div>
  );
};

export default SummaryCards;
