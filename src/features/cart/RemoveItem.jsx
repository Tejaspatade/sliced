import React from "react";

import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";

const RemoveItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  // Handler Function
  const handleRemoveItem = () => {
    dispatch(removeItem(pizzaId));
  };

  return (
    <Button type="small" onClick={handleRemoveItem}>
      Remove
    </Button>
  );
};

export default RemoveItem;
