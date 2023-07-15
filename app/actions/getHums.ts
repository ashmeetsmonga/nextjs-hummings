import prisma from "@/app/libs/prismaClient";

export async function getHums() {
	try {
		const hums = await prisma.hum.findMany({
			include: { user: { select: { name: true, email: true } } },
			orderBy: { createdAt: "desc" },
		});
		return hums;
	} catch (e: any) {
		console.log(e);
		throw new Error("Error in retreiving hums");
	}
}
