import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { chatsGet, currentChatSelect } from '../../../store/slice/chatSlice';
import styles from './ChatList.module.scss';

const ChatItem = ({chat, dispatch}) => {
  
  return (
    <li
      onClick={() => dispatch(currentChatSelect(chat.id))}
    >
      {chat.title}
    </li>
  );
};

const ChatList = () => {
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state.chat);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    dispatch(chatsGet(userId));
  }, [dispatch, userId]);

  return (
    <div className={styles.chatListContainer}>
      <ul className={styles.chatList}>
        {chats.map((chat) => {
          return (
            <ChatItem
              key={chat.id}
              chat={chat}
              dispatch={dispatch}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ChatList;