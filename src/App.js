import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { AuthContext } from "./context/auth";
import { useState } from "react";
import AdminDashboad from "./pages/AdminDashboard/AdminDashboad";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticatedAdmin, setIsAuthenticatedAdmin] = useState(false);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={isAuthenticated}>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                setauth={setIsAuthenticated}
                setauthAdmin={setIsAuthenticatedAdmin}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={<Dashboard auth={isAuthenticated} />}
          />
          <Route
            path="/admindashboard"
            element={<AdminDashboad auth={isAuthenticatedAdmin} />}
          />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
