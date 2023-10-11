import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar";
import Numbers from "./Numbers";
import Recent from "./Recent";

const Dashboard = () => {
  return (
    <div className={styles.parent}>
      <Sidebar />
      <div className={styles.main}>
        <h2 className={styles.b}>DASHBOARD</h2>
        <Numbers />
        <Recent />
      </div>
    </div>
  );
};

export default Dashboard;
