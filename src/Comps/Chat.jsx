import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ChatContext } from "../Context/ChatContextProvider";

const Chat = () => {
  const {
    fetchUserMessages,
    userChat,
    postNewMessage,
    newMessageInput,
    setNewMessageInput,
  } = useContext(ChatContext);
  fetchUserMessages();

  const [mockupChat, setMockupChat] = useState([
    {
      text: "Tja tja, hur mår du?",
      avatar: "https://i.pravatar.cc/100?img=14",
      username: "Johnny",
      conversationId: null,
    },
    {
      text: "Hallå!! Svara då!!",
      avatar: "https://i.pravatar.cc/100?img=14",
      username: "Johnny",
      conversationId: null,
    },
    {
      text: "Sover du eller?! 😴",
      avatar: "https://i.pravatar.cc/100?img=14",
      username: "Johnny",
      conversationId: null,
    },
  ]);

  const deleteMessage = async (id) => {
    try {
      const response = await fetch(
        `https://chatify-api.up.railway.app/messages/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("There was a problem with your fetch operation", error);
    }
  };

  return (
    <>
      <div className="breadcrumbs text-sm ml-10">
        <ul>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/profile-page">to profile</Link>
          </li>
        </ul>
      </div>

      {/* Mockade Chattmeddelanden */}
      <div className="mockup-window bg-base-300 border border-primary m-10">
        <div className="flex">
          <div className="bg-base-200 px-4 mt-4 w-1/2">
            {mockupChat.map((chat, idx) => (
              <div key={idx} className="chat chat-start">
                <div className="chat-header mb-1 flex">
                  {chat.username}
                  <button onClick={deleteMessage} className="ml-20">
                    ❌
                  </button>
                </div>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="avatar" src={chat.avatar} />
                  </div>
                </div>
                <div className="chat-bubble">{chat.text}</div>
              </div>
            ))}
          </div>

          {/* Användarens chattmeddelanden */}
          <div className="bg-base-200 px-4 mt-4 w-1/2 justify-end">
            {userChat.map((chat, idx) => (
              <div key={idx} className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="avatar" src={chat.avatar} />
                  </div>
                </div>
                <div className="chat-header mb-1 flex">
                  {chat.username}
                  <button className="ml-20">❌</button>
                </div>
                <div className="chat-bubble">{chat.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Inputs för att skriva och skicka meddelanden */}
        <div className="flex justify-center m-5">
          <input
            type="text"
            placeholder="Type message"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setNewMessageInput(e.target.value)}
          />
          <button
            onClick={postNewMessage}
            className="btn btn-primary px-8 ml-1"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
