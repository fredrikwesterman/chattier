import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [csrfToken, setCsrfToken] = useState(null);

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(
          "https://chatify-api.up.railway.app/csrf",
          {
            method: "PATCH",
          }
        );
        if (!response.ok) {
          throw new Error(error + "could not fetch csrf token");
        }
        const data = await response.json();
        setCsrfToken(data);
      } catch {
        error;
      }
    };

    fetchCsrfToken();
    return () => {};
  }, []);

  return (
    <AuthContext.Provider value={{ csrfToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
