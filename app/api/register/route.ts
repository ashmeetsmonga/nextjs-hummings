import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaClient";

export async function POST(req: Request) {
	const body = await req.json();
	const { name, email, password } = body;

	if (!name || !email || !password) return NextResponse.error();

	const user = await prisma.user.create({ data: { name, email, hashedPassword: password } });
	return NextResponse.json(user);
}
