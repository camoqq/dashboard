import React from "react";
import styles from "./page.module.css";
import Sidebar from "../components/Sidebar";

const getPostData = async () => {
  const res = await fetch("https://6524d386ea560a22a4ea24ca.mockapi.io/user");
  return res.json();
};

const page = async () => {
  const post = await getPostData();
  return (
    <div className={styles.parent}>
      <Sidebar />
      <div className={styles.main}>
        <h2 className={styles.b}> ACTIVITY</h2>
        <div className={styles.inside}>
          <div className={`${styles.space} ${styles.txt}`}>
            <span>Name</span>
            <span className={styles.noshow}>Email</span>
            <span>Upgrade</span>
          </div>
          <ul>
            {post.map((user) => (
              <li key={user.id} className={styles.list}>
                <div className={styles.space}>
                  <span>{user.name}</span>
                  <span className={styles.noshow}>{user.email}</span>
                  <span>{user.upgrade}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;

// import React from "react";
// import styles from "./Recent.module.css";

// const Recent = async () => {
//   const post = await getPostData();
//   return (
//     <div className={styles.recent}>
//       <div className={`${styles.space} ${styles.txt}`}>
//         <span>Name</span>
//         <span>Sign Up Date</span>
//       </div>
//       <ul>
//         {post.map((user) => (
//           <li key={user.id} className={styles.list}>
//             <div className={styles.space}>
//               <span>{user.name}</span>
//               <span>{user.createdAt}</span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Recent;
