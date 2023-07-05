import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to }) => {
  const className =
    "focus: inline-block  rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none focus:ring-2   focus:ring-yellow-400  disabled:cursor-not-allowed sm:px-6 sm:py-4";

  // Conditional Render
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
