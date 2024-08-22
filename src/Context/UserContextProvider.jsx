import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwt = localStorage.getItem("jwtToken");
    console.log(jwt);
    if (jwt) {
      const decodedJwt = JSON.parse(atob(jwt.split(".")[1]));
      setUser(decodedJwt);
    }
  }, []);

  console.info(user);

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
