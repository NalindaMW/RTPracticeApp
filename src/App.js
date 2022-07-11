import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  function addUserHandler(user) {
    console.log("Added new user");
    console.log(user);
    setUsers((prevState) => [...prevState, user]);
  }

  return (
    <div>
      <AddUser onAddNewUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
