"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Fragment } from "react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const links = [
    { href: "/", label: "Weight" },
    { href: "/coach", label: "Strength" },
  ];

  const logoutHandler = () => {
    signOut();
  };

  if (!session) return null;

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 border-t border-border bg-card text-card-foreground">
      <div className="flex justify-around items-center h-16">
        {links.map(({ href, label }, i) => (
          <Fragment key={href}>
            <Link
              href={href}
              className={cn(
                "text-sm transition-colors flex-1 text-center",
                pathname === href
                  ? "text-white"
                  : "text-muted-foreground/60 hover:text-muted-foreground"
              )}
            >
              {label}
            </Link>
            {/* {i === 0 ? <div className="w-px h-6 bg-border" /> : null} */}
          </Fragment>
        ))}
        <Button
          className="text-sm flex-1 text-center m-3 w-fit"
          onClick={logoutHandler}
        >
          Log out
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
