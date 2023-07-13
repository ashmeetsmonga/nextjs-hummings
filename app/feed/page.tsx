import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Feed = async () => {
	const session = await getServerSession(authOptions);
	if (!session) redirect("/");

	return <div>Feed</div>;
};

export default Feed;
