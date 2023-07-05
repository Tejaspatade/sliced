// import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { clearCart, getCartTotalPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

function CreateOrder() {
  // React State for controlled element
  const [withPriority, setWithPriority] = useState(false);

  // RTK Hooks

  const cart = useSelector((state) => state.cart.cart);
  const cartPrice = useSelector(getCartTotalPrice);
  const dispatch = useDispatch();
  const {
    userName,
    status: locationStatus,
    error: locationError,
    position,
    address,
  } = useSelector((state) => state.user);

  // Router-DOM Hooks
  const navigation = useNavigation();
  const formErrors = useActionData();

  // Derived State
  const isSubmitting = navigation.state === "submitting";
  const priorityPricing = withPriority ? cartPrice * 0.2 : 0;
  const finalBill = cartPrice + priorityPricing;
  const isLoading = locationStatus === "loading";

  // Conditional render
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="my-10 text-3xl font-bold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={userName.toUpperCase()}
            required
            className="input grow"
          />
        </div>

        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="ml-2 mt-1  bg-red-50 text-sm text-red-600">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-6 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              disabled={isLoading}
              required
              defaultValue={address}
              className="input w-full
          "
            />
            {locationStatus === "error" && (
              <p className="ml-2 mt-1  bg-red-50 text-sm text-red-600">
                {locationError}
              </p>
            )}
          </div>
          {address === "" && (
            <span className="z-69 absolute right-[3px] top-[3px] md:right-[5px] md:top-[3.5px]">
              <Button
                type="small"
                disabled={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get Position
              </Button>
            </span>
          )}
        </div>

        <div className=" my-10 flex items-center gap-2">
          <input
            className="hidden"
            name="cart"
            readOnly
            value={JSON.stringify(cart)}
          />
          <input
            className="hidden"
            name="position"
            readOnly
            value={
              position?.longitude && position?.latitude
                ? `${position.latitude}${position.longitude}`
                : ""
            }
          />
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 "
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />

          <label htmlFor="priority" className="font-medium ">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <Button disabled={isSubmitting || isLoading} type="primary">
            {isSubmitting
              ? "Placing Order..."
              : `Order: ${formatCurrency(finalBill)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  // Error Handling
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please Enter Valid Phone No. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // Bad for Performance Btw HEHE
  store.dispatch(clearCart());

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
