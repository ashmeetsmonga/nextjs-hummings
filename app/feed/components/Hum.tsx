"use client";

import React, { FC, useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { MdVerified } from "react-icons/md";
import {
	AiOutlineMessage,
	AiOutlineRetweet,
	AiOutlineHeart,
	AiFillHeart,
	AiOutlineBarChart,
} from "react-icons/ai";
import { ClientHum } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface HumProps {
	hum: ClientHum;
}

const Hum: FC<HumProps> = ({ hum }) => {
	const [isLiked, setIsLiked] = useState(false);
	const router = useRouter();
	useEffect(() => {
		axios.get(`/api/like?id=${hum.id}`).then((data: any) => {
			setIsLiked(data.data.isLiked);
		});
	}, []);

	const handleLike = () => {
		if (isLiked) return;
		const toastID = toast.loading("Liking hum");
		axios
			.post(`/api/like?id=${hum.id}`, {})
			.then(() => {
				toast.success("Hum liked", { id: toastID });

				setIsLiked((prev) => !prev);
				router.refresh();
			})
			.catch(() => toast.error("Something went wrong", { id: toastID }));
	};

	const handleDislike = () => {
		if (!isLiked) return;
		const toastID = toast.loading("Disliking hum");
		axios
			.post(`/api/dislike?id=${hum.id}`, {})
			.then(() => {
				toast.success("Hum disliked", { id: toastID });
				setIsLiked((prev) => !prev);
				router.refresh();
			})
			.catch(() => toast.error("Something went wrong", { id: toastID }));
	};

	return (
		<div className='w-full border-b border-purple-200 p-4 pt-5'>
			<div className='flex gap-2'>
				<RxAvatar className='flex-shrink-0' size={50} />
				<div className='w-full'>
					<div className='flex gap-1 items-center'>
						<p className='font-semibold'>{hum.user.name}</p>
						<MdVerified className='text-purple-800' size={20} />
						<p>{hum.user.email}</p>
					</div>
					<div className='mt-1'>{hum.body}</div>
					<div className='w-4/5 flex justify-between mt-2'>
						<div className='flex items-center group gap-0.5'>
							<AiOutlineMessage
								size={40}
								className='hover:bg-purple-200 px-2 py-1 rounded-full cursor-pointer transition'
							/>
							<p className='transition group-hover:text-purple-500'>136</p>
						</div>
						<div className='flex items-center group gap-0.5'>
							<AiOutlineRetweet
								size={40}
								className='hover:bg-green-200 px-2 py-1 rounded-full cursor-pointer transition'
							/>
							<p className='transition group-hover:text-green-500'>196</p>
						</div>
						<div className='flex items-center group gap-0.5'>
							{isLiked ? (
								<AiFillHeart
									onClick={handleDislike}
									size={40}
									className={`hover:bg-red-200 text-red-500 px-2 py-1 rounded-full cursor-pointer transition`}
								/>
							) : (
								<AiOutlineHeart
									onClick={handleLike}
									size={40}
									className={`hover:bg-red-200 px-2 py-1 rounded-full cursor-pointer transition`}
								/>
							)}
							<p className='transition group-hover:text-red-500'>{hum.likedIds.length}</p>
						</div>
						<div className='flex items-center group gap-0.5'>
							<AiOutlineBarChart
								size={40}
								className='hover:bg-blue-200 px-2 py-1 rounded-full cursor-pointer transition'
							/>
							<p className='transition group-hover:text-blue-500'>76.1K</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hum;
