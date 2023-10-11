import React from "react";
import styles from "./Recent.module.css";

const getPostData = async () => {
  const res = await fetch("https://6524d386ea560a22a4ea24ca.mockapi.io/user");
  return res.json();
};

const Recent = async () => {
  const post = await getPostData();
  return (
    <div className={styles.recent}>
      <div className={`${styles.space} ${styles.txt}`}>
        <span>Name</span>
        <span>Sign Up Date</span>
      </div>
      <ul>
        {post.map((user) => (
          <li key={user.id} className={styles.list}>
            <div className={styles.space}>
              <span>{user.name}</span>
              <span>{user.createdAt}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recent;
