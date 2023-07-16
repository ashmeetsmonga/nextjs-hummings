import { Hum } from "@prisma/client";

interface User {
	username: string;
	email: string;
}

interface ClientHum extends Hum {
	user: { name: string | null; email: string | null };
}
