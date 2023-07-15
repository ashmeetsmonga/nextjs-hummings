import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LeftSidebar from "../components/Feed/LeftSidebar";
import RightSidebar from "../components/Feed/RightSidebar";
import Mainbar from "../components/Feed/Mainbar";

const Feed = async () => {
	const session = await getServerSession(authOptions);
	console.log(session);
	if (!session) redirect("/");

	return (
		<div className='flex justify-center'>
			<div className='w-1/4 max-w-[275px]'>
				<LeftSidebar />
			</div>
			<div className='w-2/4 max-w-[650px]'>
				<Mainbar />
			</div>
			<div className='w-1/4 max-w-[275px]'>
				<RightSidebar />
			</div>
		</div>
	);
};

export default Feed;
