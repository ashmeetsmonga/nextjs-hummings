import React, { FC } from "react";
import { RxAvatar } from "react-icons/rx";
import { MdVerified } from "react-icons/md";
import {
	AiOutlineMessage,
	AiOutlineRetweet,
	AiOutlineHeart,
	AiOutlineBarChart,
} from "react-icons/ai";

interface HumProps {
	hum: Hum;
}

const Hum: FC<HumProps> = ({ hum }) => {
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
					<div className='mt-1'>{hum.content}</div>
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
							<AiOutlineHeart
								size={40}
								className='hover:bg-red-200 px-2 py-1 rounded-full cursor-pointer transition'
							/>
							<p className='transition group-hover:text-red-500'>{hum.likesCount}</p>
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
