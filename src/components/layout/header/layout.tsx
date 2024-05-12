"use client";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/icons";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

export const HeaderLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLUListElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        navbarRef.current.contains &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <header className="bg-white w-full">
      <div className="container flex justify-between items-center py-4">
        <Link href={"/"}>
          <Logo />
        </Link>
        {/* Desktop Navigation */}
        <nav className={`text-slate-600 font-bold hidden md:block`}>
          <ul className="flex flex-col sm:flex-row gap-5">
            <li className="cursor-pointer hover:text-orange-400">
              <Link href={"/characters"}>Characters</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-400">
              <Link href={"/episodes"}>Episodes</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-400">
              <Link href={"/locations"}>Locations</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Icon */}
        <div onClick={toggleMenu} className="block md:hidden">
          {isMenuOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          ref={navbarRef}
          className={
            isMenuOpen
              ? "fixed md:hidden left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#272b33] ease-in-out duration-500 z-50"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-orange-500 p-2">
            Rick and Morty
          </h1>

          {/* Mobile Navigation Items */}
          <nav className={`text-slate-600 font-bold p-2`}>
            <ul className="flex flex-col gap-5">
              <li className="cursor-pointer hover:text-orange-400">
                <Link href={"/characters"}>Characters</Link>
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                <Link href={"/episodes"}>Episodes</Link>
              </li>
              <li className="cursor-pointer hover:text-orange-400">
                <Link href={"/locations"}>Locations</Link>
              </li>
            </ul>
          </nav>
          <Image
            className="mt-5"
            src="/nav.png"
            width={300}
            height={200}
            alt="logo"
          />
        </ul>
      </div>
    </header>
  );
};
