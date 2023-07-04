import React from "react";
import { Link, Outlet } from "react-router-dom";

import CartOverview from "../features/cart/CartOverview";

const AppLayout = () => {
	return (
		<div>
			<Link to="/">Sliced Co.</Link>

			<main>
				<Outlet />
			</main>

			<CartOverview />
		</div>
	);
};

export default AppLayout;
