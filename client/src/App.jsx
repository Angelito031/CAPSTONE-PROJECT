import { useAuthStore } from "./store/store";
import { Navigate } from "react-router-dom";

const App = () => {
  const { isAuth } = useAuthStore();
  return isAuth ? <div>Dashboard</div> : <Navigate to="/login" />;
};

export default App;
