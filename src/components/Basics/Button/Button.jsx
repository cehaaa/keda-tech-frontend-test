import React from "react";

const Button = ({ children, variant = "primary", className }) => {
	const variants = {
		primary: "bg-blue-600 hover:bg-blue-700 text-white ",
		secondary: "bg-white-600 hover:bg-blue-100 text-blue-600 bg-white ",
	};

	return (
		<button
			type='submit'
			className={`duration-200 px-10 py-4 text-center font-semibold ${className} ${variants[variant]}`}>
			{children}
		</button>
	);
};

export default Button;
