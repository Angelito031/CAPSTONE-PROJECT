import { useState } from "react";
import { useAuthStore, useLoadingStore } from "../store/store";

const Auth = () => {
  const { isAuth, user, login, logout } = useAuthStore();
  const { isLoading } = useLoadingStore();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    await login(credentials);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isAuth ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
