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
				placeholder="Search Orders Here"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			></input>
		</form>
	);
};

export default SearchOrders;
