import React from "react";
import { Link } from "react-router-dom";

import SearchOrders from "../features/order/SearchOrders";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-700 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Sliced Co.
      </Link>
      <SearchOrders />
      <UserName />
    </header>
  );
};

export default Header;
