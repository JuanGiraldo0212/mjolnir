import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ClientProtectedRoute = ({
  children,
  redirectTo = "/auth",
}: {
  children: React.ReactNode;
  redirectTo?: string;
}) => {
  const { data: _, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.replace(redirectTo);
  }, [status, redirectTo, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return null;

  return <>{children}</>;
};

export default ClientProtectedRoute;
