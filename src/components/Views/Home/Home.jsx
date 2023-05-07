import React, { useState } from "react";

import Text from "./../../Basics/Text/Text";
import Button from "../../Basics/Button/Button";
import Section from "../../Basics/Section/Section";
import Heading from "../../Basics/Heading/Heading";
import HeroSection from "../../HeroSection/HeroSection";
import Subheading from "../../Basics/Subheading/Subheading";

import TierCard from "../../TierCard/TierCard";

const Home = () => {
	const initialTiers = [
		{
			title: "Basic",
			description: "Perfect for started",
			price: 49,
			benefits: [
				"Recording incoming goods",
				"Checkout goods",
				"Record Profits",
			],
		},
		{
			title: "Business",
			description: "Perfect for small business",
			price: 80,
			benefits: [
				"Record incoming and outgoing goods",
				"Record Profits",
				"Can analyze sales results with CHART",
				"Support 7x24 Hours",
			],
		},
		{
			title: "Entrepreneur",
			description: "Perfect for entrepreneur",
			price: 100,
			benefits: [
				"Record incoming and outgoing goods",
				"Record Profits",
				"Analyze sales results with CHART",
				"Support 7x24 Hours",
				"Export data to Excel",
				"AI Earning prediction",
			],
		},
	];

	const [tiers, setTiers] = useState(initialTiers);

	return (
		<div className='h-full'>
			<HeroSection />

			{/* About Us */}
			<Section className='bg-white'>
				<Subheading>About Us</Subheading>

				<Heading>We're Delivering Only Exceptional Quality Work</Heading>

				<div className='w-full grid grid-cols-1 md:grid-cols-3 gap-x-10'>
					<div className='relative col-span-2'>
						<img
							src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80'
							alt='image'
							className='w-full object-cover mb-5 md:mb-0'
						/>

						<div className='bg-blue-600 absolute text-white w-[450px] h-[200px] -right-40 -bottom-20 md:grid grid-cols-2 gap-x-5 place-items-center pl-3 hidden'>
							<div>
								<Text className='font-semibold'>People</Text>
								<Text className='text-4xl font-bold my-2'>254+</Text>
								<Text>Trusted by 254 companies</Text>
							</div>
							<div>
								<div className='font-semibold'>World Offices</div>
								<div className='text-4xl font-bold my-2'>12</div>
								<div>spread over many areas</div>
							</div>
						</div>
					</div>

					<div>
						<Text className='text-lg mb-5 text-gray-500'>
							Our company is a leading provider of Enterprise Resource Planning
							(ERP) solutions for small and medium-sized businesses. We have
							been in the industry for over a decade, and our team is made up of
							experienced professionals who are dedicated to helping our clients
							streamline their operations and improve their bottom line.
						</Text>
					</div>
				</div>
			</Section>

			{/* Why Choose Us */}
			<Section className='bg-slate-50 md:mt-[100px] flex items-center'>
				<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center'>
					<div className='order-2 relative'>
						<img
							src='https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
							alt='image'
							className='hidden md:block w-full object-cover'
						/>
					</div>
					<div>
						<Subheading>Why Choose Us</Subheading>
						<Heading>Your Success Is Our Mission</Heading>

						<img
							src='https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
							alt='image'
							className=' w-full object-cover md:hidden mb-5'
						/>

						<Text className='mb-5 text-lg text-gray-500'>
							Our company is a leading provider of Enterprise Resource Planning
							(ERP) solutions for small and medium-sized businesses. We have
							been in the industry for over a decade, and our team is made up of
							experienced professionals who are dedicated to helping our clients
							streamline their operations and improve their bottom line.
						</Text>
						<Button className='md:w-fit w-full'>Read more</Button>
					</div>
				</div>
			</Section>

			{/* Choose Your Plans */}
			<Section className='bg-white'>
				<Subheading>Choose Your Plan</Subheading>
				<Heading>Ready To Get Started?</Heading>
				<Text className='text-lg text-gray-500'>
					Choose a plan tailored your needs, read all plans or contact us, we
					will guide you better.
				</Text>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 w-full'>
					{tiers.map((tier, index) => {
						return <TierCard key={index} tier={tier} />;
					})}
				</div>
			</Section>

			{/* Contact Us */}
			<Section className='bg-slate-50 flex items-center'>
				<div className='w-full grid items-center grid-cols-1 md:grid-cols-2 gap-x-10'>
					<img
						src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
						alt='image'
						className=' w-full object-cover mb-5'
					/>

					<div>
						<Subheading>Contact Us</Subheading>
						<Heading>
							We'd love to collaborate! Let us know what you're after
						</Heading>
						<Text className='text-gray-500 text-lg mb-5'>
							We value your feedback and inquiries, and are always here to help
							you with any questions or concerns you may have. Whether you need
							assistance with an order, have a suggestion for us, or just want
							to say hello, we would love to hear from you. Please don't
							hesitate to reach out to us via phone, email, or the form below.
							We look forward to connecting with you!
						</Text>
						<Button className='md:w-fit w-full'>Contact Us</Button>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default Home;
