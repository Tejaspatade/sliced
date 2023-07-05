import React from "react";
import { useSelector } from "react-redux";

const UserName = () => {
  // Consuming data from Redux
  const userName = useSelector((state) => state.user.userName);

  // Conditional Render
  if (!userName) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">Hi, {userName}</div>
  );
};

export default UserName;
