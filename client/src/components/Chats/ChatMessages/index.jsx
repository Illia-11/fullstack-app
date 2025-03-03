import MessageItem from "../MessageItem";
import styles from "./ChatMessages.module.scss";

const ChatMessages = ({ messages }) => {
  if (!messages) {
    return <h4>Chat is empty!</h4>;
  }

  return (
    <ul className={styles.ChatList}>
      {messages.map((message) => {
        return <MessageItem key={message.id} message={message} />;
      })}
    </ul>
  );
};

export default ChatMessages;
