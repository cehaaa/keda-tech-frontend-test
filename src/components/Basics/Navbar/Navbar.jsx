import React from "react";

import Button from "../Button/Button";
import Hyperlink from "../Hyperlink/Hyperlink";
import Container from "../Container/Container";

const Navbar = () => {
	return (
		<div className='w-full bg-white h-20 flex items-center '>
			<Container>
				<div className='flex justify-between w-full items-center'>
					<div className='text-xl font-medium'>The ERP Company</div>
					<div className='hidden md:flex space-x-8 items-center'>
						<div className='font-semibold'>Home</div>
						<Hyperlink className='text-gray-400'>About</Hyperlink>
						<Hyperlink className='text-gray-400'>Pricing</Hyperlink>
						<Hyperlink className='text-gray-400'>Contact</Hyperlink>
						<Button>Sign In</Button>
					</div>
					<div className='block md:hidden'>
						<Button>Sign In</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
