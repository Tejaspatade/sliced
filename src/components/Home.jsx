import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-28 px-4 text-center sm:my-16 ">
      <h1 className="mb-20 mt-20 text-xl font-bold md:text-4xl">
        The best pizza.
        <br />
        <span className="mt-10 text-yellow-400">
          Right out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
