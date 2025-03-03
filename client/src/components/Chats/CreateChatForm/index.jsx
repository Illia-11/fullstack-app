import { useState } from "react";
import { useDispatch } from "react-redux";
import { chatCreate } from "../../../store/slice/chatSlice";
import styles from './CreateChatForm.module.scss';

const ChatForm = () => {
  const [chatTitle, setChatTitle] = useState("");
  const dispatch = useDispatch();

  const createChat = () => {
    dispatch(chatCreate({ chatTitle }));
    setChatTitle("");
  };

  return (
    <div className={styles.chatFormContainer}>
      <h3>Create chat</h3>

      <div className={styles.chatFormInputGroup}>
      <label>Enter chat title:</label>
        <input
          type="text"
          value={chatTitle}
          onChange={(e) => setChatTitle(e.target.value)}
          placeholder="Enter Chat Title"
        />
      </div>

      <button onClick={createChat} className={styles.chatFormButton}>Add new chat</button>
    </div>
  )
};

export default ChatForm;
