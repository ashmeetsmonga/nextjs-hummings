import React, { FC } from "react";
import Hum from "./Hum";
import HumInput from "./HumInput";

interface MainbarProps {
	hums: any;
}

const Mainbar: FC<MainbarProps> = ({ hums }) => {
	console.log("Ashmeet hums", hums);
	return (
		<div className='w-full min-h-screen border-l border-r border-l-purple-200'>
			<HumInput />
			<Hum />
			<Hum />
			<Hum />
			<Hum />
			<Hum />
			<Hum />
			<Hum />
		</div>
	);
};

export default Mainbar;
