import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { messageCreate } from "../../../store/slice/chatSlice";
import styles from "./MessageForm.module.scss";

const MessageForm = ({ chatId }) => {
  const [messageText, setMessageText] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (messageText.trim() !== "") {
      dispatch(
        messageCreate({
          chatId,
          text: messageText,
          authorId: user.id,
        })
      );

      setMessageText("");
    }
  };

  return (
    <form onSubmit={handleSendMessage} className={styles.messageForm}>
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Write a message..."
        className={styles.messageFormInput}
      />

      <button type="submit" className={styles.messageFormButton}>
        Send
      </button>
    </form>
  );
};

export default MessageForm;
