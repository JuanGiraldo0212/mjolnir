import { redirect } from "next/navigation";
import AuthPage from "@/components/auth/auth-page";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Auth = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <AuthPage />;
};

export default Auth;
