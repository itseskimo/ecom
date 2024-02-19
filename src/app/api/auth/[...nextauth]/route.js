// import { NextApiHandler} from 'next';
// import { NextAuthOptions } from 'next-auth';
// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import axios from 'axios';

// interface Credentials {
//   username: string;
//   password?: string;
// }

// interface CustomToken {
//   token: string;
//   username: string;
// }

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {},
//       authorize: async (credentials: Credentials) => {
//         const { username, password} = credentials;

//         try {
//           let response = await axios.post(`https://aerflyt.onrender.com/login`, { username, password });

// console.log(response,username, password)
//           if (response.data) {
//             return Promise.resolve<CustomToken>({

//                 ...response.data,
//                 token: response.data.token,

//             });
//           } else {
//             return Promise.reject<null>(null);
//           }
//         } catch (error) {
//           throw new Error(error.response.data.message );
//         }
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET!,
//   callbacks: {
//     async jwt({ token, user, session }) {
//       return { ...(token as CustomToken), ...(user as User) };
//     },

//     async session({ session, token, user }) {
//       session.token = (token as CustomToken).token;
//       session.username = (token as CustomToken).user.username;


//       return session;
//     },
//   },
// };

// const handler: NextApiHandler<CustomSession> = async (req, res) => {
//   const result = await NextAuth(req, res, authOptions);
//   return result;
// };

// export default handler;

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

// Define your authentication options
export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            authorize: async (credentials) => {
                const { username, password } = credentials;

                try {
                    let response = await axios.post(`https://aerflyt.onrender.com/login`, { username, password });

                    if (response.data) {
                        return Promise.resolve({
                            ...response.data,
                        });
                    } else {
                        return Promise.reject(null);
                    }
                } catch (error) {
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
            session.name = token.name;
            session.token = token.token;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };