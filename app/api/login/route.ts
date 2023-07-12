import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/app/libs/prismaClient";

export async function POST(req: Request) {
	const body = await req.json();
	const { email, password } = body;

	const user = await prisma.user.findUnique({ where: { email } });
	if (!user)
		return NextResponse.json({ message: "User with provided email not found" }, { status: 404 });

	const isPasswordCorrect = bcrypt.compareSync(password, user.hashedPassword as string);
	if (!isPasswordCorrect)
		return NextResponse.json({ message: "Invalid password" }, { status: 404 });

	return NextResponse.json(user);
}
