import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import CartOverview from "../features/cart/CartOverview";
import LoadSpinner from "./LoadSpinner";
import Header from "./Header";

const AppLayout = () => {
  // Router-DOM Hooks
  const navigation = useNavigation();

  // Derived State
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <LoadSpinner />}
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
