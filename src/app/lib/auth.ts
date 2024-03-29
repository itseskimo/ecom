import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { NextAuthOptions } from 'next-auth';
import { AuthInfo } from "@/config/env";

declare module "next-auth" {
    interface User {
        image: undefined;
        email: undefined;
        name: string;
    }

    interface Session {
        user: User;
        expires: string;
        name: string;
        token: string
        error: string;
    }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            authorize: async (credentials) => {
                const { username, password } = credentials as AuthInfo;

                try {
                    let response = await axios.post(`https://aerflyt.onrender.com/login`, { username, password });

                    if (response.data) {
                        return Promise.resolve({
                            ...response.data
                        });
                    } else {
                        return Promise.reject(null);
                    }
                } catch (error: any) {
                    throw new Error(error.response.data.message);
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },

        async session({ session, token }) {
            session.name = token.name as string;
            session.token = token.token as string;
            return session;
        },
    },
};