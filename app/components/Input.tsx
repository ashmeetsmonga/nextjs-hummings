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
			className='w-3/4 p-4 border-2 border-gray-200 rounded-md'
			placeholder={placeholder}
		/>
	);
};

export default Input;
