import prisma from "@/app/libs/prismaClient";

export async function getHums() {
	try {
		const hums = await prisma.hum.findMany({
			include: { user: { select: { name: true, email: true } } },
		});
		return hums;
	} catch (e: any) {
		throw new Error("Error in retreiving hums");
	}
}
