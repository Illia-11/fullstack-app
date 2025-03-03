import styles from './MessageItem.module.scss';

const MessageItem = ({ message }) => {
  const { body, user } = message;

  return (
    <li className={styles.chatItem}>
      <div className={styles.chatItemHeader}>
        {user.firstName} {user.lastName}
      </div>
      <div className={styles.chatItemContent}>
        <p>{body}</p>
      </div>
    </li>
  );
};

export default MessageItem;
