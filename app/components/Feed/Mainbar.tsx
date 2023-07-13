import React from "react";
import Hum from "./Hum";
import HumInput from "./HumInput";

const Mainbar = () => {
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
