import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/lib/utils";
import { findUserByEmail } from "@/app/api/db";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const user = await findUserByEmail(credentials.email);
        if (!user) throw new Error("No user found.");

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Could not log you in.");

        return {
          id: user.id,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
