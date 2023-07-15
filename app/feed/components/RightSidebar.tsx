import React from "react";

const RightSidebar = () => {
	return (
		<div className='w-full flex flex-col py-5 px-5'>
			<div className='flex flex-col gap-2 bg-purple-100 rounded-2xl px-5 py-5'>
				<h2 className='text-2xl font-semibold'>Get Verified</h2>
				<p>Answer a riddle to unlock new features</p>
				<button className='self-start rounded-full bg-black px-8 py-2 text-white text-lg font-semibold'>
					Get Verified
				</button>
			</div>
		</div>
	);
};

export default RightSidebar;
