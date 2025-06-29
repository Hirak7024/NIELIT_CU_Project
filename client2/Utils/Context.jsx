// Utils/Context.js

import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    Name: "",
    Email: "",
    SessionId: ""
  });

  const [loggedInAdmin, setLoggedInAdmin] = useState({
    Email: "",
    SessionId: ""
  });

  const location = useLocation();

  // Load from localStorage on app start or refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }

    const storedAdmin = localStorage.getItem("loggedInAdmin");
    if (storedAdmin) {
      setLoggedInAdmin(JSON.parse(storedAdmin));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Context.Provider value={{
      loggedInUser,
      setLoggedInUser,
      loggedInAdmin,
      setLoggedInAdmin
    }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
