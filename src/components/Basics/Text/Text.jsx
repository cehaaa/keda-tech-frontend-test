import React from "react";

const Text = ({ children, className }) => {
	return <p className={`text-gray-500 ${className}`}>{children}</p>;
};

export default Text;
