"use client";

import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { registerUser } from "../actions/registerUser";
import Input from "./Input";
import { toast } from "react-hot-toast";

const Signin = () => {
	const [signinToggle, setSigninToggle] = useState("login");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleLogin = async () => {
		const toastID = toast.loading("Logging in");
		await signIn("credentials", { email, password, callbackUrl: "/feed" });
		toast.success("Logged in successfully", { id: toastID });
	};

	const handleRegister = async () => {
		const user = await registerUser(name, email, password);
		await signIn("credentials", { email, password, callbackUrl: "/feed" });
	};

	return (
		<main className='flex h-screen w-screen'>
			<div className='w-full bg-purple-800'></div>
			<div className='w-full'>
				<div className='w-full h-full p-24 flex flex-col items-center justify-center gap-8'>
					<h1 className='text-6xl text-center font-extrabold text-purple-800'>
						Connect With Everyone
					</h1>
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
							<div className='flex flex-col items-center gap-2 mt-4'>
								<button
									onClick={handleLogin}
									className='rounded-full bg-purple-800 px-10 py-2 text-white text-xl'
								>
									Login
								</button>
								<p onClick={() => setSigninToggle("signup")} className='underline cursor-pointer'>
									Do not have an account? Sign Up
								</p>
							</div>
						)}
						{signinToggle === "signup" && (
							<div className='flex flex-col items-center gap-2 mt-4'>
								<button
									onClick={handleRegister}
									className='rounded-full bg-purple-800 px-10 py-2 text-white text-xl'
								>
									Signup
								</button>
								<p onClick={() => setSigninToggle("login")} className='underline cursor-pointer'>
									Already have an account? Log In
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Signin;
