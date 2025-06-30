// Utils/Context.js

import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Make sure to run: npm install uuid

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

  // Load from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      // If user is not logged in (no Name or Email), but missing session ID
      if (!parsedUser.SessionId) {
        parsedUser.SessionId = uuidv4();
        localStorage.setItem("loggedInUser", JSON.stringify(parsedUser));
      }

      setLoggedInUser(parsedUser);
    } else {
      // No user at all (first-time unregistered visitor)
      const guestUser = {
        Name: "",
        Email: "",
        SessionId: uuidv4()
      };
      localStorage.setItem("loggedInUser", JSON.stringify(guestUser));
      setLoggedInUser(guestUser);
    }

    // Load admin
    const storedAdmin = localStorage.getItem("loggedInAdmin");
    if (storedAdmin) {
      setLoggedInAdmin(JSON.parse(storedAdmin));
    }
  }, []);

  // Scroll to top on route change
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
