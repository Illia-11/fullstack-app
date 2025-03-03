import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChatMessages } from "../../../store/slice/chatSlice";
import MessageForm from "../MessageForm";
import ChatMessages from "../ChatMessages";
import styles from "./ChatArea.module.scss";

const ChatArea = () => {
  const dispatch = useDispatch();
  const { currentChat } = useSelector((state) => state.chat);

  useEffect(() => {
    if (currentChat?.id) {
      dispatch(getChatMessages(currentChat.id));
    }
  }, [currentChat?.id, dispatch]);

  if (!currentChat) {
    return <div>You need to choose a chat!</div>;
  }

  return (
    <div className={styles.chatArea}>
      <h3>Chat</h3>
      <div className={styles.chatArea}>
        <ChatMessages messages={currentChat.messages} />
      </div>
      <div  className={styles.MessageFormContainer}>
        <MessageForm chatId={currentChat.id} />
      </div>
    </div>
  );
};

export default ChatArea;
