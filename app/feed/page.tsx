import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LeftSidebar from "./components/LeftSidebar";
import Mainbar from "./components/Mainbar";
import RightSidebar from "./components/RightSidebar";

const Feed = async () => {
	const session = await getServerSession(authOptions);
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
