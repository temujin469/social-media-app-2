import React, { createContext, useEffect, useState } from "react";

interface DarkModeCtx {
  darkMode: boolean
  toggle: () => void
}

export const DarkModeContext = createContext<DarkModeCtx>({
  darkMode: false, toggle: () => { },
});

type Props = {
  children: JSX.Element
}

export const DarkModeContextProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    JSON.parse(localStorage.getItem("darkMode") as string) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};