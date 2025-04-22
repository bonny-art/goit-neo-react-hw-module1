import React from "react";
import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={avatar} alt="Avatar" />
      <p className={styles.name}>{name}</p>
      <p className={clsx(styles.status, { [styles.offline]: !isOnline })}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;

