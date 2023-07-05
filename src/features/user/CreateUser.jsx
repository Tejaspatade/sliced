import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  // RTK Hook
  const dispatch = useDispatch();

  // Router-DOM Hooks
  const navigate = useNavigate();

  // React State for Controlled ELement
  const [username, setUsername] = useState("");

  // Handler Functions
  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    // Dispatching Action to RTK with action creator
    dispatch(updateName(username));

    // Navigate to Menu Page
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
