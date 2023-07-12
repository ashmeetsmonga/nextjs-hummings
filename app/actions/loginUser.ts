import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

export const loginUser = async (email: string, password: string) => {
	let toastID = "";
	try {
		toastID = toast.loading("Logging in...");
		const { data }: { data: User } = await axios.post("/api/login", { email, password });
		toast.success("Succesfully logged in", { id: toastID });
		return data;
	} catch (error: any) {
		if (error.response) toast.error(error.response.data.message, { id: toastID });
		else toast.error("Something went wrong", { id: toastID });
	}
};
