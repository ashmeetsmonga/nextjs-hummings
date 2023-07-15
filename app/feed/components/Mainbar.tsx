import React, { FC } from "react";
import Hum from "./Hum";
import HumInput from "./HumInput";

interface MainbarProps {
	hums: Hum[] | null;
}

const Mainbar: FC<MainbarProps> = ({ hums }) => {
	console.log("Ashmeet hums", hums);
	return (
		<div className='w-full min-h-screen border-l border-r border-l-purple-200'>
			<HumInput />
			{hums?.map((hum, idx) => (
				<Hum key={idx} hum={hum} />
			))}
		</div>
	);
};

export default Mainbar;
