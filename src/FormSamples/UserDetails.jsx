import { useState } from "react";

export const UserDetails = () => {
  const [user, setUser] = useState({ name: "Ajay", age: 25 });

  // const handleUserName = () => {
  //   if (user.name === "Ajay") {
  //     setUser({ ...user, name: "Rajeshwari" });
  //   } else {
  //     setUser({ ...user, name: "Ajay" });
  //   }
  // };
  // const handleUserAge = () => {
  //   if (user.age === 25) {
  //     setUser({ ...user, age: 26 });
  //   } else {
  //     setUser({ ...user, age: 25 });
  //   }
  // };

  function onChangeHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h1>User Details</h1>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      {/* <button onClick={onChangeHandler} name="name">
        Update user name
      </button>
      <button onClick={onChangeHandler} name="age">
        Update user name
      </button> */}

      <input type="text" onChange={onChangeHandler} name="name" />
      <input type="text" name="age" onChange={onChangeHandler} />
    </>
  );
};
