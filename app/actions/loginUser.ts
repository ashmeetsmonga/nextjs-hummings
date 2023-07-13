import axios from "axios";

export const loginUser = async (email: string, password: string) => {
	try {
		const { data }: { data: User } = await axios.post("/api/login", { email, password });
		return data;
	} catch (error: any) {
		console.log(error);
	}
};
