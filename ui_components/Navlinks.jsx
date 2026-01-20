"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`${isActive ? "text-white bg-blue-700 font-semibold rounded-[5px] py-[8px] px-[10px] " : "dark:text-white"}`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
