interface User {
	username: string;
	email: string;
}

interface Hum {
	id: string;
	createdBy: string;
	content: string;
	user: {
		name: string | null;
		email: string | null;
	};
}
