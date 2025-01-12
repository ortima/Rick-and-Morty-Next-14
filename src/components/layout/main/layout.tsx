import React from "react";

interface MainLayoutProps {
	children: React.ReactNode;
}
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return <main className="bg-[#272b33] py-16">{children}</main>;
};
