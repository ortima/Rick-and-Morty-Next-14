"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
		<header className="w-full bg-white">
			<div className="container flex items-center justify-between py-4">
				<Link href={"/"}>
					<Logo />
				</Link>
				{/* Desktop Navigation */}
				<nav className={`hidden font-bold text-slate-600 md:block`}>
					<ul className="flex flex-col gap-5 sm:flex-row">
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
							? "fixed left-0 top-0 z-50 h-full w-[40%] border-r border-r-gray-900 bg-[#272b33] duration-500 ease-in-out md:hidden"
							: "fixed bottom-0 left-[-100%] top-0 w-[60%] duration-500 ease-in-out"
					}
				>
					{/* Mobile Logo */}
					<h1 className="w-full p-2 text-3xl font-bold text-orange-500">
						Rick and Morty
					</h1>

					{/* Mobile Navigation Items */}
					<nav className={`p-2 font-bold text-slate-600`}>
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
