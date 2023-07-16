import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismaClient";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) return NextResponse.error();

	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id");

	let hum = await prisma.hum.findUnique({ where: { id: id as string } });
	const updatedLikedIds = hum?.likedIds.filter((id) => id !== currentUser?.id);

	hum = await prisma.hum.update({
		where: { id: id as string },
		data: { likedIds: updatedLikedIds },
	});

	return NextResponse.json({ message: "Hum disliked successfully" });
}
