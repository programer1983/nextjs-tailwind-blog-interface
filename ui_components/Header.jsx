"use client";

import { FaHamburger } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Link from "next/link";
import NavLinks from "./Navlinks";

const Header = () => {
  const [mobilemenu, setMobileMenu] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.removeItem("theme", "dark");
    }
  }, [isDark]);

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="max-container flex justify-between items-center py-6 gap-6">
          <Link
            href="/"
            className="text-2xl text-[#141624] font-medium dark:text-white"
          >
            DevFolio
          </Link>
          <nav className="flex justify-end lg:flex-1 max-md:hidden">
            <ul className="flex items-center gap-9 text-[#383C4A] dark:text-[#fffff]">
              <li className="cursor-pointer">
                <NavLinks href="/profilepage/id">Hi, Dimon</NavLinks>
              </li>
              <li className="cursor-pointer">
                <NavLinks href="/logout">Logout</NavLinks>
              </li>
              <li className="cursor-pointer">
                <NavLinks href="/login">Login</NavLinks>
              </li>
              <li className="cursor-pointer">
                <NavLinks href="/register">Register</NavLinks>
              </li>
              <li className="font-semibold cursor-pointer">
                <NavLinks href="/create">Create Post</NavLinks>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-5 lg:ml-[20px]">
            <Switch checked={isDark} onCheckedChange={setIsDark} />
            <FaHamburger
              className="cursor-pointer text-2xl hidden max-md:block dark:text-white"
              onClick={() => setMobileMenu(!mobilemenu)}
            />
          </div>
        </div>
      </header>
      <MobileMenu mobilemenu={mobilemenu} />
    </>
  );
};

export default Header;
