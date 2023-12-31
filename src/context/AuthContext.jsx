import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const login = async (credential) => {
    const result = await axios.post("/auth/login", credential);
    addAccessToken(result.data.accessToken);
    setAuthUser(result.data.user);
  };

  const register = async (input) => {
    const result = await axios.post("/auth/register", input);

    addAccessToken(result.data.accessToken);
    setAuthUser(result.data.user);
  };

  const logout = async () => {
    removeAccessToken();
    setAuthUser(null);
  };

  const updateProfile = async (data) => {
    const res = await axios.patch('/user',data)
    setAuthUser({...authUser,...res.data})
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        authUser,
        initialLoading,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}{" "}
    </AuthContext.Provider>
  );
}
