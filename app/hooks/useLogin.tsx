import axios from "axios";

export const useLogin = async (username: string, password: string) => {
	try {
		const { data }: { data: User } = await axios.post("/api/login", { username, password });
		return data;
	} catch (error: any) {
		return error;
	}
};
