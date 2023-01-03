import React from "react";

import Text from "../Basics/Text/Text";
import Button from "../Basics/Button/Button";

const TierCard = ({ tier }) => {
	return (
		<div className='md:hover:bg-blue-50 border md:border-none transform md:hover:-translate-y-3 duration-200 cursor-pointer'>
			<div className='p-5'>
				<Text className='text-black text-3xl mb-2 font-semibold'>
					{tier.title}
				</Text>
				<Text className='text-lg mb-3 text-gray-500'>{tier.description}</Text>
				<Button className='w-full mb-3'>Choose this plan</Button>
				<div className='text-3xl mb-5 font-bold'>
					${tier.price}
					<span className='text-gray-400 font-semibold'>/mo</span>
				</div>

				<Text className='text-xl font-medium text-black mb-3'>Benefits</Text>
				<div className='space-y-2'>
					{tier.benefits.map((benefit, index) => {
						return (
							<Text className='text-lg text-gray-500' key={index}>
								{benefit}
							</Text>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default TierCard;
