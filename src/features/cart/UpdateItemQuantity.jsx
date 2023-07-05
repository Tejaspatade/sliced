import React from "react";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { decQuantity, incQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  // RTK hooks
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(incQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
