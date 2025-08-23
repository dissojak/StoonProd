import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../../lib/mongodb";
import AdminUser from "../../../../models/AdminUser";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("DOING AUTHORIZATION NOW !!!");
        await connectToDatabase();
        const user = await AdminUser.findOne({
          username: credentials.username,
        });
        if (user && user.password === credentials.password) {
            console.log("User authenticated:", user.username);
            console.log("User ID:", user._id.toString());
            console.log("User role:", password);
          return { id: user._id.toString(), email: user.email, role: "admin" };
        }
        throw new Error("Invalid credentials");
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // 30 minutes in seconds
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.role) session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: "9f1c6b8d4e2a7f3d9a1c4e8b7d2f9c5a$%#@!^&*",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
