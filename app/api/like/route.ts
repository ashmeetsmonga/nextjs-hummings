import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismaClient";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) return NextResponse.error();

	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id");

	const hum = await prisma.hum.findUnique({ where: { id: id as string } });
	const isLiked = hum?.likedIds.includes(currentUser.id);

	return NextResponse.json({ isLiked });
}

export async function POST(req: Request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) return NextResponse.error();

	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id");

	const hum = await prisma.hum.update({
		where: { id: id as string },
		data: { likedIds: { push: currentUser.id } },
	});

	return NextResponse.json({ message: "Post liked" });
}
