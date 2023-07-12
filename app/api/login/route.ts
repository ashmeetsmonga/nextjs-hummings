import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const { username, password } = body;

	return NextResponse.json({ username, email: username + password });
}
