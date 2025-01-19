import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { FooterLayout, HeaderLayout, MainLayout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Rick and Morty",
		default: "Rick and Morty"
	},
	description: "Rick and Morty by ortima"
};
interface RootLayoutProps {
	children: React.ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<HeaderLayout />
				<MainLayout>{children}</MainLayout>
				<FooterLayout />
			</body>
		</html>
	);
};
export default RootLayout;
