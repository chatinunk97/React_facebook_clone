import { useState, createContext } from "react";
import axios from "../config/axios";
import { addAccessToken} from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);


  useEffect(()=>{
    axios.get('/auth/me')
  },[])


  const login = async (credentialObj) => {
    try {
      const res = await axios.post("/auth/login", credentialObj);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ login, authUser }}>{children}</AuthContext.Provider>
  );
}
