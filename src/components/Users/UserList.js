import React from "react";
import Card from "../UI/Card";

import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <Card cardStyles={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
