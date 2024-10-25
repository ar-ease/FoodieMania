"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  const isActive = path === href;

  return (
    <Link
      href={href}
      className={isActive ? "text-orange-500 font-bold" : "text-white"}
    >
      {children}
    </Link>
  );
}
