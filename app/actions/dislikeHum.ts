import prisma from "@/app/libs/prismaClient";
import getCurrentUser from "./getCurrentUser";

export async function dislikeHum(id: string) {
	const currentUser = await getCurrentUser();

	let hum = await prisma.hum.findUnique({ where: { id } });
	const updatedLikedIds = hum?.likedIds.filter((id) => id !== currentUser?.id);

	hum = await prisma.hum.update({
		where: { id },
		data: { likedIds: updatedLikedIds },
	});
}
