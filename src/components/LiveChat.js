import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/redux/chatSlice";
import { generateRandomNameAndMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API POLLING
      dispatch(
        addMessage({
          name: generateRandomNameAndMessage().name,
          message: generateRandomNameAndMessage().message,
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 w-full h-[558px] border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mahatma Gandhi",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-80 px-2 border border-collapse"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-3 mx-2 bg-green-300 rounded-sm">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
