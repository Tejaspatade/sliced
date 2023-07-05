import LinkBtn from "../../components/LinkBtn";

function EmptyCart() {
  return (
    <div className="px-4 py-10">
      <LinkBtn to="/menu">&larr; Back to menu</LinkBtn>

      <p className="mt-10 text-xl font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
