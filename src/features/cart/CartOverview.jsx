import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCartTotalPrice, getCartTotalQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  // RTK hooks
  const totalQuantity = useSelector(getCartTotalQuantity);
  const totalPrice = useSelector(getCartTotalPrice);

  // Conditional Rendering
  if (!totalQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-6 font-semibold text-stone-300">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Go To cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
