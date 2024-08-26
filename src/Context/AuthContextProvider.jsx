import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [csrfToken, setCsrfToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [userAlreadyExcist, setUserAlreadyExcist] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [jwtToken, setJwtToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );
  const [loginFailed, setLoginFailed] = useState(false);
  const [user, setUser] = useState(null);

  //funktion för att kolla om user finns, om den finns sätt user till rätt data så state sätts vid page refresh.
  const setUserAndPersist = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  //Hämtar csrf token för registrering och inloggning.
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

  //function för att registrera nya användare.
  const registerNewUser = async () => {
    try {
      setUserAlreadyExcist(false);

      const response = await fetch(
        "https://chatify-api.up.railway.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            csrfToken: csrfToken,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("could not fetch");
      }
      const data = await response.json();
      setRegistrationSuccess(true);
    } catch (error) {
      setUserAlreadyExcist(true);
      console.log(error + "Something went wrong with the registration");
    }
  };

  //Funktion för att logga in användare.
  const loginFunction = async () => {
    setLoginFailed(false);
    try {
      const response = await fetch(
        "https://chatify-api.up.railway.app/auth/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            csrfToken: csrfToken,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(setLoginFailed(true));
      }

      const data = await response.json();

      setJwtToken(data.token);
      const decodedJwt = JSON.parse(atob(data.token.split(".")[1]));
      setUserAndPersist(decodedJwt);
      sessionStorage.setItem("isAuthenticated", true);
      localStorage.setItem("jwtToken", data.token);
      setIsAuthenticated(true);
      setLoginSuccess(true);
    } catch (error) {
      console.log(error);
      setLoginFailed(true);
    }
  };

  const [logoutSuccess, setlogoutSuccess] = useState(false);

  const logoutHandler = () => {
    setlogoutSuccess(true);
    localStorage.clear("jwtToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        csrfToken,
        registerNewUser,
        setUsername,
        setPassword,
        setEmail,
        registrationSuccess,
        setRegistrationSuccess,
        userAlreadyExcist,
        loginFunction,
        loginSuccess,
        loginFailed,
        setLoginFailed,
        setLoginSuccess,
        jwtToken,
        isAuthenticated,
        setIsAuthenticated,
        loginFailed,
        logoutHandler,
        logoutSuccess,
        setlogoutSuccess,
        user,
        setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
