import React from "react";

import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import Hyperlink from "../Hyperlink/Hyperlink";

const Footer = () => {
	return (
		<>
			<footer className='bg-blue-600 py-16 text-white'>
				<div className='lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-5 items-start gap-y-10 md:gap-y-0 w-full px-5'>
					<div className='max-w-[500px] cols-span-1 md:col-span-2 '>
						<Heading className='text-3xl text-white'>The ERP Company</Heading>
					</div>
					<div>
						<div className='font-semibold'>Why Home?</div>
						<div className='flex flex-col space-y-1.5 mt-3'>
							<Hyperlink className='transform hover:translate-x-1'>
								About Us
							</Hyperlink>
							<Hyperlink className='transform hover:translate-x-1'>
								Our Clients
							</Hyperlink>
						</div>
					</div>
					<div>
						<div className='font-semibold'>About Home?</div>
						<div className='flex flex-col space-y-1.5 mt-3'>
							<Hyperlink className='transform hover:translate-x-1'>
								Company Information
							</Hyperlink>
							<Hyperlink className='transform hover:translate-x-1'>
								Worldwide Directory
							</Hyperlink>
							<Hyperlink className='transform hover:translate-x-1'>
								Investor Relation
							</Hyperlink>
							<Hyperlink className='transform hover:translate-x-1'>
								News and Press
							</Hyperlink>
							<Hyperlink className='transform hover:translate-x-1'>
								Careers
							</Hyperlink>
						</div>
					</div>
					<div>
						<div className='font-semibold'>Site Information</div>
						<div className='flex flex-col space-y-1.5 mt-3'>
							<Hyperlink className='transform hover:translate-x-1'>
								Privacy
							</Hyperlink>
							<Hyperlink className='transform hover:translate-x-1'>
								Terms of Use
							</Hyperlink>
							<Hyperlink className='transform hover:translate-x-1'>
								Legal Disclosure
							</Hyperlink>
							<Hyperlink className='transform hover:translate-x-1'>
								Copyright
							</Hyperlink>
							<Hyperlink className='transform hover:translate-x-1'>
								Trademark
							</Hyperlink>
							<Hyperlink className='transform hover:translate-x-1'>
								Sitemap
							</Hyperlink>
						</div>
					</div>
				</div>
			</footer>
			<div className='w-full bg-white flex items-center justify-center py-5 text-gray-400'>
				<Text>©Copyright 2023 Christian</Text>
			</div>
		</>
	);
};

export default Footer;
