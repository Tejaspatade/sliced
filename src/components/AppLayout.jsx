import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";

import CartOverview from "../features/cart/CartOverview";
import LoadSpinner from "./LoadSpinner";
import SearchOrders from "../features/order/SearchOrders";

const AppLayout = () => {
	// Router-DOM Hooks
	const navigation = useNavigation();

	// Derived State
	const isLoading = navigation.state === "loading";

	return (
		<div className="layout">
			{isLoading && <LoadSpinner />}

			<Link to="/">Sliced Co.</Link>
			<SearchOrders />

			<main>
				<Outlet />
			</main>

			<CartOverview />
		</div>
	);
};

export default AppLayout;