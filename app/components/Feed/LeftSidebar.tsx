import React from "react";
import { AiFillHome, AiFillMessage, AiOutlineUser } from "react-icons/ai";
import { BsSearch, BsCardList, BsFillBookmarkFill, BsTwitter } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { MdVerified } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";

const LeftSidebar = () => {
	return (
		<div className='w-full flex flex-col items-start py-5'>
			<div className='px-4 mb-4'>
				<BsTwitter className='text-purple-800' size={30} />
			</div>
			<div className='flex gap-3 justify-start items-center hover:bg-gray-100 pl-4 py-4 pr-8 rounded-full'>
				<AiFillHome size={30} />
				<p className='text-xl'>Home</p>
			</div>
			<div className='flex gap-3 justify-start items-center hover:bg-gray-100 pl-4 py-4 pr-8 rounded-full'>
				<BsSearch size={30} />
				<p className='text-xl'>Explore</p>
			</div>
			<div className='flex gap-3 justify-start items-center hover:bg-gray-100 pl-4 py-4 pr-8 rounded-full'>
				<GrNotification size={30} />
				<p className='text-xl'>Notifications</p>
			</div>
			<div className='flex gap-3 justify-start items-center hover:bg-gray-100 pl-4 py-4 pr-8 rounded-full'>
				<AiFillMessage size={30} />
				<p className='text-xl'>Message</p>
			</div>
			<div className='flex gap-3 justify-start items-center hover:bg-gray-100 pl-4 py-4 pr-8 rounded-full'>
				<BsCardList size={30} />
				<p className='text-xl'>List</p>
			</div>
			<div className='flex gap-3 justify-start items-center hover:bg-gray-100 pl-4 py-4 pr-8 rounded-full'>
				<BsFillBookmarkFill size={30} />
				<p className='text-xl'>Bookmarks</p>
			</div>
			<div className='flex gap-3 justify-start items-center hover:bg-gray-100 pl-4 py-4 pr-8 rounded-full'>
				<MdVerified size={30} />
				<p className='text-xl'>Verified</p>
			</div>
			<div className='flex gap-3 justify-start items-center hover:bg-gray-100 pl-4 py-4 pr-8 rounded-full'>
				<AiOutlineUser size={30} />
				<p className='text-xl'>Profile</p>
			</div>
			<div className='flex gap-3 justify-start items-center hover:bg-gray-100 pl-4 py-4 pr-8 rounded-full'>
				<CgMoreO size={30} />
				<p className='text-xl'>More</p>
			</div>
		</div>
	);
};

export default LeftSidebar;
