import { createContext, useState, useContext } from "react";

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  const [userChat, setUserChat] = useState([]);
  const [newMessageInput, setNewMessageInput] = useState(null);

  const fetchUserMessages = async () => {
    try {
      const response = await fetch(
        "https://chatify-api.up.railway.app/messages",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        Console.log("Network problem, could not fetch at the moment!");
      }

      const data = await response.json();
      setUserChat(data);
    } catch (error) {
      console.log(error + "error with fetching the messages");
    }
  };

  const postNewMessage = async () => {
    try {
      const response = await fetch(
        "https://chatify-api.up.railway.app/messages",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            "Content-Type": "application.json",
          },
          body: JSON.stringify({
            text: newMessageInput,
            conversationId: null,
          }),
        }
      );
      if (!response.ok) {
        console.log("Network error, Could not post message at the moment.");
      }

      const data = await response.json();
      setUserChat([...userChat, data.latestMessage]);
    } catch (error) {}
  };

  // const postNewMessage = () => {
  //   // if (inputValue && inputValue.current.value.length > 0){
  //   //     const newMessage = DOMPurify.sanitize(inputValue.current.value);
  //   //     console.log(newMessage)

  //   fetch("https://chatify-api.up.railway.app/messages", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       text: newMessageInput,
  //       conversationId: null,
  //     }),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         console.error("Problem with posting new message");
  //       }
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with your fetch operation:", error);
  //     });
  // };

  return (
    <>
      <ChatContext.Provider
        value={{
          userChat,
          fetchUserMessages,
          postNewMessage,
          newMessageInput,
          setNewMessageInput,
        }}
      >
        {props.children}
      </ChatContext.Provider>
    </>
  );
};

export default ChatContextProvider;
