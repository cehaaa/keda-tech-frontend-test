import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./Basics/Header/Header";

import Home from "./Views/Home/Home";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
];

const router = createBrowserRouter(routes);

const App = () => {
	return (
		<>
			<Header />
			<RouterProvider router={router} />
		</>
	);
};

export default App;
