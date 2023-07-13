import React from "react";

interface InputProps {
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder }) => {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			className='w-3/4 py-4 px-8 border-2 border-gray-200 rounded-full focus:outline-purple-800'
			placeholder={placeholder}
		/>
	);
};

export default Input;
