import React from "react";

import Button from "../Button/Button";
import Hyperlink from "../Hyperlink/Hyperlink";
import Container from "../Container/Container";

const Navbar = () => {
	return (
		<div className='w-full bg-white h-20 flex items-center '>
			<Container>
				<div className='flex justify-between w-full items-center'>
					<div className='text-xl font-medium'>Home</div>
					<div className='flex space-x-8 items-center'>
						<div className='font-semibold'>Home</div>
						<Hyperlink>About</Hyperlink>
						<Hyperlink className='text-gray-500'>Pricing</Hyperlink>
						<Hyperlink className='text-gray-500'>Contact</Hyperlink>
						<div>
							<Button>Sign In</Button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
