import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Views/Home/Home";

import Header from "./Basics/Header/Header";
import Footer from "./Basics/Footer/Footer";

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
			<Footer />
		</>
	);
};

export default App;
