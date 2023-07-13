"use client";

import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";

const HumInput = () => {
	const [hum, setHum] = useState("");

	return (
		<div className='w-full flex flex-col items-center p-4 border-b border-purple-200'>
			<h1 className='py-3 text-2xl font-semibold self-start'>Home</h1>
			<div className='w-full flex gap-4'>
				<RxAvatar className='flex-shrink-0' size={50} />
				<textarea
					rows={2}
					value={hum}
					onChange={(e) => setHum(e.target.value.substring(0, 200))}
					placeholder="What's happening?!"
					className='w-full px-4 py-3 text-xl border-b border-purple-200 focus:outline-purple-800'
				/>
			</div>
			<button
				disabled={hum.length === 0}
				className='rounded-full mt-4 self-end disabled:opacity-50 bg-purple-800 px-8 py-2 text-white text-lg font-semibold'
			>
				Hum
			</button>
		</div>
	);
};

export default HumInput;
