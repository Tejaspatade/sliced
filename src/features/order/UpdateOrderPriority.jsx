import React from "react";

import { useFetcher } from "react-router-dom";

import Button from "../../components/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrderPriority = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make this Order a Priority</Button>
    </fetcher.Form>
  );
};

export const action = async ({ request, params }) => {
  // Update Response
  const data = { priority: true };

  // Patch Request
  await updateOrder(params.orderId, data);
  return null;
};

export default UpdateOrderPriority;
