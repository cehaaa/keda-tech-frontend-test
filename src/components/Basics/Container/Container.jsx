import React from "react";

const Container = ({ children, className = "" }) => {
	return <div className={`w-9/12 mx-auto ${className}`}>{children}</div>;
};

export default Container;
