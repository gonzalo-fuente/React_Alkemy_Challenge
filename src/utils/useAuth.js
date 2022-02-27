import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext);
};
