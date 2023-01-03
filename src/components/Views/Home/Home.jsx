import React, { useState } from "react";

import Text from "./../../Basics/Text/Text";
import Button from "../../Basics/Button/Button";
import Section from "../../Basics/Section/Section";
import Heading from "../../Basics/Heading/Heading";
import HeroSection from "../../HeroSection/HeroSection";
import Subheading from "../../Basics/Subheading/Subheading";

import TierCard from "../../TierCard/TierCard";

const Home = () => {
	const intialTiers = [
		{
			title: "Basic",
			price: 49,
			benefits: [
				"Recording incoming goods",
				"Checkout goods",
				"Record Profits",
			],
		},
		{
			title: "Business",
			price: 80,
			benefits: [
				"Record incoming and outgoing goods",
				"Record Profits",
				"Can analyze sales results with CHART",
				"Support 7x24 Hours",
			],
		},
		{
			title: "Enterpreneur",
			price: 100,
			benefits: [
				"Record incoming and outgoing goods",
				"Record Profits",
				"Can analyze sales results with CHART ",
				"Support 7x24 Hours",
				"Export data to Excel",
				"AI Earning prediction",
			],
		},
	];

	const [tiers, setTiers] = useState(intialTiers);

	return (
		<div className='h-full'>
			<HeroSection />

			<Section className='bg-white'>
				<Subheading>About Us</Subheading>

				<Heading>We're Delivering Only Exceptional Quality Work</Heading>

				<div className='w-full grid grid-cols-1 md:grid-cols-3 gap-x-10'>
					<div className='md:col-span-2 relative'>
						<img
							src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80'
							alt='image'
							className='w-full object-cover mb-4 md:mb-0'
						/>

						<div className='hidden  absolute bottom-[-100px] right-[-250px] h-[200px] bg-blue-600 text-white w-[500px] md:flex justify-center items-center gap-x-10'>
							<div>
								<div className='font-semibold'>People</div>
								<div className='text-4xl font-bold my-2'>254+</div>
								<div>Trusted by 254 companies</div>
							</div>
							<div>
								<div className='font-semibold'>World Offices</div>
								<div className='text-4xl font-bold my-2'>12</div>
								<div>spread over many areas</div>
							</div>
						</div>
					</div>
					<div>
						<Text className='mb-5'>
							Our company is a leading provider of Enterprise Resource Planning
							(ERP) solutions for small and medium-sized businesses. We have
							been in the industry for over a decade, and our team is made up of
							experienced professionals who are dedicated to helping our clients
							streamline their operations and improve their bottom line.
						</Text>
						<Button>Read more</Button>
					</div>
				</div>
			</Section>

			<Section className='bg-slate-50 md:mt-[100px] flex items-center'>
				<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center'>
					<div className='order-1 md:order-2 mt-4 relative'>
						<img
							src='https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
							alt='image'
							className=' w-full object-cover'
						/>
					</div>
					<div>
						<Subheading>Why Choose Us</Subheading>
						<Heading>Your Success Is Our Mission</Heading>
						<Text className='mb-4'>
							Our co mpany is a leading provider of Enterprise Resource Planning
							(ERP) solutions for small and medium-sized businesses. We have
							been in the industry for over a decade, and our team is made up of
							experienced professionals who are dedicated to helping our clients
							streamline their operations and improve their bottom line.
						</Text>
						<Button>Read more</Button>
					</div>
				</div>
			</Section>

			<Section className='bg-white'>
				<Heading>Ready To Get Started?</Heading>
				<Text className='text-lg'>Choose a plan tailored your needs</Text>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-10 w-full'>
					{tiers.map((tier, index) => {
						return <TierCard key={index} tier={tier} />;
					})}
				</div>
			</Section>

			<Section className='bg-slate-50 flex items-center'>
				<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center'>
					<div className='relative'>
						<img
							src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
							alt='image'
							className=' w-full object-cover'
						/>
					</div>
					<div>
						<Subheading></Subheading>
						<Heading>Contact Us</Heading>
						<Text className='mb-5'>
							We value your feedback and inquiries, and are always here to help
							you with any questions or concerns you may have. Whether you need
							assistance with an order, have a suggestion for us, or just want
							to say hello, we would love to hear from you. Please don't
							hesitate to reach out to us via phone, email, or the form below.
							We look forward to connecting with you!
						</Text>
						<Button>Contact Us</Button>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default Home;
