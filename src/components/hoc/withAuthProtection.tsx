import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// Auth protection HOC for server components
export async function withAuthProtection<T>(
  content: () => Promise<T>,
  redirectTo = "/auth"
): Promise<T> {
  const session = await getServerSession(authOptions);
  if (!session) redirect(redirectTo);
  return content();
}
