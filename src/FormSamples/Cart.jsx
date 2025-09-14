import { useState } from "react";

export const Cart = () => {
  const [cartCont, setCartCount] = useState(0);

  const handleClick = () => {
    setCartCount(cartCont + 1);
  };

  return (
    <>
      <h1>Number of items in the Cart : {cartCont}</h1>
      <button onClick={handleClick}>Click here</button>
    </>
  );
};
