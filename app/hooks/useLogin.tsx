import axios from "axios";

export const useLogin = async (email: string, password: string) => {
	try {
		const { data }: { data: User } = await axios.post("/api/login", { email, password });
		return data;
	} catch (error: any) {
		return error;
	}
};
