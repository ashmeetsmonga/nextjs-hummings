"use client";

import { useState } from "react";
import Input from "./components/Input";
import { useLogin } from "./hooks/useLogin";

export default function Home() {
	const [signinToggle, setSigninToggle] = useState("login");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleLogin = async () => {
		const data = await useLogin(email, password);
		console.log(data);
	};

	return (
		<main className='flex min-h-screen w-screen'>
			<div className='w-full bg-purple-800'></div>
			<div className='w-full'>
				<div className='w-full h-full p-24 flex flex-col items-center justify-center gap-8'>
					<h1 className='text-6xl text-center font-extrabold text-purple-800'>
						Connect With Everyone
					</h1>
					<div className='flex flex-col w-full items-center'>
						<div className='flex gap-4'>
							<button
								onClick={() => setSigninToggle("login")}
								className={`px-4 py-2 text-lg rounded ${
									signinToggle === "login" ? "bg-purple-800 text-white" : ""
								}`}
							>
								Login
							</button>
							<button
								onClick={() => setSigninToggle("signup")}
								className={`px-4 py-2 text-lg rounded ${
									signinToggle === "signup" ? "bg-purple-800 text-white" : ""
								}`}
							>
								Signup
							</button>
						</div>
					</div>
					<div className='w-full flex flex-col items-center gap-4'>
						{signinToggle === "signup" && (
							<Input
								type='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder='Name'
							/>
						)}

						<Input
							type='text'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email'
						/>

						<Input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder='Password'
						/>

						{signinToggle === "signup" && (
							<Input
								type='password'
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								placeholder='Confirm Password'
							/>
						)}
						{signinToggle === "login" && (
							<button
								onClick={handleLogin}
								className='rounded border border-purple-800 px-4 py-2 text-purple-800 text-xl uppercase'
							>
								Login
							</button>
						)}
						{signinToggle === "signup" && (
							<button className='rounded border border-purple-800 px-4 py-2 text-purple-800 text-xl uppercase'>
								Signup
							</button>
						)}
					</div>
				</div>
			</div>
		</main>
	);
}
