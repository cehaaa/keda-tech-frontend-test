import React from "react";

const Hyperlink = ({ children, href = "#" }) => {
	return (
		<a
			href={href}
			className='text-gray-500 hover:text-blue-600 duration-200 cursor-pointer hover:underline underline-offset-2 font-medium '>
			{children}
		</a>
	);
};

export default Hyperlink;
