"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface MyContextProps {
  user: {
    name: string;
    email: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
    }>
  >;
}

const MyContext = createContext<MyContextProps>({
  user: { name: "", email: "" },
  setUser: () => {},
});

export const useMyContext = () => useContext(MyContext);

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const contextValue = { user, setUser };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
