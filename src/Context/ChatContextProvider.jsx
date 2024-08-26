import { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const [userChat, setUserChat] = useState(null);

  return (
    <>
      <ChatContext.Provider value={{ userChat }}>
        {props.children}
      </ChatContext.Provider>
    </>
  );
};

export default ChatContextProvider;
