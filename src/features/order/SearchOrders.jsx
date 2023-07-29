import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrders = () => {
  // Router-DOM Hooks
  const navigate = useNavigate();

  // React Hooks
  const [query, setQuery] = useState("");

  // Hanlders
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:font-semibold placeholder:text-stone-600 focus:outline-none focus:ring focus:ring-yellow-400 sm:w-64 sm:focus:w-72"
        placeholder="Search Your Order No Here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchOrders;
