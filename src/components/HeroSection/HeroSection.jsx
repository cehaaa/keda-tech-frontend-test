import Button from "../Basics/Button/Button";

const HeroSection = () => {
	return (
		<div className='w-full min-h-[calc(100vh-128px)] bg-hero-section bg-cover relative'>
			<div className='absolute w-full h-full top-0 left-0 bg-blue-700 bg-opacity-50 flex items-center justify-center'>
				<div className='w-6/12 text-center text-white'>
					<div className='uppercase font-semibold tracking-wider'>
						Welcome to digital ERP agency
					</div>
					<div className='text-6xl my-5 font-bold leading-snug'>
						Best Enterprise Resource Planning Agency
					</div>
					<Button variant='secondary'>Read more</Button>
				</div>
			</div>
		</div>
	);
};
export default HeroSection;
