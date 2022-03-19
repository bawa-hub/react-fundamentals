import React, { useState } from "react";
import useInput from "./hooks/useInput";

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <lable>First Name</lable>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <lable>Last Name</lable>
          <input type="text" {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
