import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { AuthContext } from "./context/auth";
import { useState } from "react";
import AdminDashboad from "./pages/AdminDashboard/AdminDashboad";
import Home from "./pages/Home/Home";

function App() {
  const [currnetUser, setCurrentUser] = useState({
    isAuthenticated: false,
    role: "",
  });
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [isAuthenticatedAdmin, setIsAuthenticatedAdmin] = useState(false);

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{ user: currnetUser, setUser: setCurrentUser }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
              // setauth={setIsAuthenticated}
              // setauthAdmin={setIsAuthenticatedAdmin}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admindashboard" element={<AdminDashboad />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
