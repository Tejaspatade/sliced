import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LinkBtn = ({ children, to }) => {
  // Router-DOM Hooks
  const navigate = useNavigate();

  const className = "text-sm text-blue-500 hover:text-blue-600";

  // Conditional rendering
  if (to === "-1")
    return <button className={className} onClick={() => navigate(-1)}></button>;

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkBtn;
