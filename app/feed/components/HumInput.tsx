"use client";

import React, { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { useRouter } from "next/navigation";

interface HumInputProps {}

const HumInput: FC<HumInputProps> = () => {
	const [hum, setHum] = useState("");
	const router = useRouter();
	const handlePostHum = () => {
		const toastID = toast.loading("Adding Hum");
		axios
			.post("/api/hum", { hum })
			.then(() => {
				toast.success("Hum added successfully", { id: toastID });
				setHum("");
				router.refresh();
			})
			.catch(() => toast.error("Something went wrong", { id: toastID }));
	};

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
					className='w-full px-4 py-3 text-xl border-b border-purple-200 focus:outline-none'
				/>
			</div>
			<button
				disabled={hum.length === 0}
				onClick={handlePostHum}
				className='rounded-full mt-4 self-end disabled:opacity-50 bg-purple-800 px-8 py-2 text-white text-lg font-semibold'
			>
				Hum
			</button>
		</div>
	);
};

export default HumInput;
