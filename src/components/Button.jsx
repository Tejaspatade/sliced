import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    "focus: inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none focus:ring-2   focus:ring-yellow-400  disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "focus: inline-block border-2 text-sm border-stone-300 rounded-full font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-200  disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-sm",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm font-bold",
  };
  // Conditional Render
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
