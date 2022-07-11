import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = ({ onAddNewUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredRefName = nameInputRef.current.value;
    const enteredRefAge = ageInputRef.current.value;

    if (
      enteredRefName.trim().length === 0 ||
      enteredRefAge.trim().length === 0 ||
      enteredRefAge < 1
    ) {
      setError({
        title: "An error occured!",
        message: "Something went wrong.",
      });
      return;
    }

    onAddNewUser({ name: enteredRefName, age: enteredRefAge });

    // setEnteredUserName("");
    // setEnteredAge("");

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // commented since using Ref
  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // commented since using Ref
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorClickHandler = () => {
    setError();
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorClick={errorClickHandler}
        />
      )}
      <Card cardStyles={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            // onChange={userNameChangeHandler}
            // value={enteredUserName}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
