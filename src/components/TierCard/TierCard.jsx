import React from "react";

import Text from "../Basics/Text/Text";
import Button from "../Basics/Button/Button";

const TierCard = ({ tier }) => {
	return (
		<div className='hover:bg-white transform hover:-translate-y-3 duration-200 cursor-pointer'>
			<div className='p-5'>
				<Text className='text-3xl text-black mb-2 font-semibold'>
					{tier.title}
				</Text>
				<Text>Perfect for started</Text>
				<Button className='w-full my-3'>Choose this plan</Button>
				<div className='text-3xl my-3 font-bold'>
					${tier.price}
					<span className='text-gray-400 font-semibold'>/mo</span>
				</div>
				<Text>(Per subscribe per month)</Text>

				<Text className='mt-3 font-medium text-black'>Benefits</Text>
				<div className='mt-3 space-y-3'>
					{tier.benefits.map((benefit, index) => {
						return <Text key={index}>{benefit}</Text>;
					})}
				</div>
			</div>
		</div>
	);
};

export default TierCard;
