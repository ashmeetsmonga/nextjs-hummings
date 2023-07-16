import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaClient";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: Request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) return NextResponse.error();

	const { hum } = await req.json();
	try {
		const data = await prisma.hum.create({
			data: { body: hum, userId: currentUser.id, likedIds: [] },
		});
		return NextResponse.json(data);
	} catch (e: any) {
		return NextResponse.json({ message: "Error in humming" }, { status: 403 });
	}
}
