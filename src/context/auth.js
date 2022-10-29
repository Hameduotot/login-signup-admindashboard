import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: {
    isAuthenticated: false,
    role: "",
  },
});

export function useAuth() {
  return useContext(AuthContext);
}

