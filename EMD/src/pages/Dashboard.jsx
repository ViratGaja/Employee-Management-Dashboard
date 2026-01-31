import { useAuth } from "../context/AuthContext";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import SummaryCards from "../components/SummaryCards";
import "../components/style.css";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="layout">

      <aside className="sidebar">
        <div>
          <h2>EMS</h2>
          <p className="menu-item">Dashboard</p>
        </div>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </aside>


      {/* Main */}
      <main className="main">
        <header className="header">
          <h2>Employee Dashboard</h2>
        </header>

        <SummaryCards />
        <EmployeeForm />
        <EmployeeTable />
      </main>

    </div>
  );
};

export default Dashboard;
