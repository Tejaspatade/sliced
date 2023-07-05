import LinkBtn from "../../components/LinkBtn";
import Button from "../../components/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  // RTK Hooks
  const username = useSelector((state) => state.user.userName);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Handler Functions
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Conditional rendering
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-10">
      <LinkBtn to="/menu">&larr; Back to menu</LinkBtn>

      <h2 className="mt-8 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-300 border-b">
        {cart.map((pizza) => (
          <CartItem item={pizza} key={pizza.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
