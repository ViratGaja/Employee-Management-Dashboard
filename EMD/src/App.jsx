import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { isLoggedIn } = useAuth();

  console.log("isLoggedIn in App:", isLoggedIn);

  return (
    <>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </>
  );
};

export default App;
