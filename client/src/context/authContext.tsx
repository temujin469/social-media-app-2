import { createContext, useEffect, useState } from "react";
import api from "../utils/axios";
// import { signin } from '../api/userApi'


interface AuthCtx {
  currentUser: User | null
  login: ((inputs: UserBody) => void)
}


export const AuthContext = createContext<AuthCtx>({
  currentUser: null,
  login: (inputs: UserBody) => null
});

export const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
  const [currentUser, setCurrentUser] = useState<User>(
    JSON.parse(localStorage.getItem("user") as string) || null
  );

  const login = async (inputs: UserBody) => {
    const response = await api.post("/auth/login", inputs, {
      withCredentials: true,
    });
    setCurrentUser(response.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};