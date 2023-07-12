import axios from "axios";
import { toast } from "react-hot-toast";

export const registerUser = async (name: string, email: string, password: string) => {
	let toastID = "";
	try {
		toastID = toast.loading("Registering user");
		const { data } = await axios.post("api/register", { name, email, password });
		toast.success("User successfully resgistered", { id: toastID });
		return data;
	} catch (error: any) {
		toast.error("Something went wrong", { id: toastID });
	}
};
