import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/lib/utils";
import { findUserByEmail } from "../../db";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const user = await findUserByEmail(credentials.email);
        if (!user) throw new Error("No user found.");
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Could not log you in.");
        return { email: user.email };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
