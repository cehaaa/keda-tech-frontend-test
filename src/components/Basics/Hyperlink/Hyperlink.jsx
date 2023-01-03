import React from "react";

const Hyperlink = ({ children, href = "#", className }) => {
	return (
		<a
			href={href}
			className={` duration-200 cursor-pointer hover:underline underline-offset-2`}>
			{children}
		</a>
	);
};

export default Hyperlink;
