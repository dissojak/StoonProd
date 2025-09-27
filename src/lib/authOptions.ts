import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;
        const { username, password } = credentials as { username: string; password: string };
        await connectToDatabase();
        const user = await (AdminUser as any).findOne({ username });
        if (!user) return null;
        const isPasswordMatch = user.password === password;
        const isAdmin = user.isAdmin;
        if (isPasswordMatch && isAdmin) {
          return { id: user._id.toString(), email: user.email ?? undefined, role: "admin" } as any;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role;
      return token;
    },
    async session({ session, token }) {
      if (token?.role) (session.user as any).role = token.role as string;
      return session;
    },
  },
  pages: { signIn: "/" }, // root of subdomain is login
  secret: process.env.NEXTAUTH_SECRET,
};
