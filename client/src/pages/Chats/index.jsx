import ChatArea from "../../components/Chats/ChatArea";
import ChatList from "../../components/Chats/ChatList";
import ChatForm from "../../components/Chats/CreateChatForm";
import styles from "./ChatPage.module.scss";

const ChatPage = () => {
  return (
    <div className={styles.chatPageContainer}>
      <div className={styles.chatListContainer}>
        <ChatList />
      </div>
      <div className={styles.chatListContainer}>
        <ChatForm />
      </div>
      <div className={styles.chatAreaContainer}>
        <ChatArea />
      </div>
    </div>
  );
};

export default ChatPage;
