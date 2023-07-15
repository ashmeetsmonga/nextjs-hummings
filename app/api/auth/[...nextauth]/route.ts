import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/libs/prismaClient";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				try {
					const user = await prisma.user.findUnique({ where: { email: credentials?.email } });
					if (!user) throw new Error("Invalid credentials");

					const isPasswordCorrect = bcrypt.compareSync(
						credentials?.password as string,
						user.hashedPassword as string
					);
					if (!isPasswordCorrect) throw new Error("Invalid credentials");

					console.log("Login successful", user);
					return user;
				} catch (e) {
					return null;
				}
			},
		}),
	],

	pages: {
		signIn: "/",
	},
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	},
	callbacks: {
		jwt: async ({ token, user }) => {
			console.log("Ashmeet user", user, token);
			if (user) token.uid = user.id;
			return token;
		},
		session: async ({ session, token }) => {
			console.log("Ashmeet", token);
			if (session?.user) session.user.id = token.uid;
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
