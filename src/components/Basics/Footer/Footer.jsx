import React from "react";

import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import Hyperlink from "../Hyperlink/Hyperlink";

const Footer = () => {
	return (
		<>
			<footer className='bg-gray-100 py-16 text-black'>
				<div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-5 items-start gap-y-10 md:gap-y-0'>
					<div className='max-w-[500px] cols-span-1 md:col-span-2 '>
						<Heading className='text-3xl text-blue-600'>Home</Heading>
					</div>
					<div>
						<div className='font-semibold'>Why Home?</div>
						<div className='flex flex-col space-y-1.5 mt-3'>
							<Hyperlink>About Us</Hyperlink>
							<Hyperlink>Our Clients</Hyperlink>
						</div>
					</div>
					<div>
						<div className='font-semibold'>About Home?</div>
						<div className='flex flex-col space-y-1.5 mt-3'>
							<Hyperlink>Company Information</Hyperlink>
							<Hyperlink>Worldwide Directory</Hyperlink>
							<Hyperlink>Investor Relation</Hyperlink>
							<Hyperlink>News and Press</Hyperlink>
							<Hyperlink>Careers</Hyperlink>
						</div>
					</div>
					<div>
						<div className='font-semibold'>Site Information</div>
						<div className='flex flex-col space-y-1.5 mt-3'>
							<Hyperlink>Privacy</Hyperlink>
							<Hyperlink>Terms of Use</Hyperlink>
							<Hyperlink>Legal Disclosure</Hyperlink>
							<Hyperlink>Copyright</Hyperlink>
							<Hyperlink>Trademark</Hyperlink>
							<Hyperlink>Sitemap</Hyperlink>
						</div>
					</div>
				</div>
			</footer>
			<div className='w-full bg-white flex items-center justify-center py-5'>
				<Text>© Copyright 2023 Christian.</Text>
			</div>
		</>
	);
};

export default Footer;
