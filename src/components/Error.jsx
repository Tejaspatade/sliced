import { useRouteError } from "react-router-dom";
import LinkBtn from "./LinkBtn";

function Error() {
  // Router-DOM Hooks
  const err = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{err.data || err.message}</p>
      <LinkBtn to="-1">&larr; Go back</LinkBtn>
    </div>
  );
}

export default Error;
