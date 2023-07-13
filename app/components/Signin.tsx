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
		await signIn("credentials", { email, password, redirect: false });
		toast.success("Logged in successfully", { id: toastID });
	};

	const handleRegister = async () => {
		const user = await registerUser(name, email, password);
		console.log(user);
	};

	return (
		<main className='flex h-screen w-screen'>
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
								className='rounded border border-purple-800 px-4 py-2 text-purple-800 text-xl'
							>
								Login
							</button>
						)}
						{signinToggle === "signup" && (
							<button
								onClick={handleRegister}
								className='rounded border border-purple-800 px-4 py-2 text-purple-800 text-xl'
							>
								Signup
							</button>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Signin;