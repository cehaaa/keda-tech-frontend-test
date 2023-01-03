import React from "react";

import Container from "./../Container/Container";

const Section = ({ children, className }) => {
	return (
		<section className={`min-h-[calc(100vh-128px)] w-full py-16 ${className} `}>
			<Container>{children}</Container>
		</section>
	);
};

export default Section;
