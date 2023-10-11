import React from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai/";
import { FiActivity } from "react-icons/fi/";

const Sidebar = () => {
  return (
    <div className={styles.side}>
      <Link href="/" className={styles.border}>
        <AiOutlineHome size={30} />
      </Link>
      <Link href="/activity" className={`${styles.border} ${styles.space}`}>
        <FiActivity size={30} />
      </Link>
    </div>
  );
};

export default Sidebar;
