import React from "react";
interface MainLayoutProps {
  children: React.ReactNode;
}
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <main className="py-16 bg-[#272b33]">{children}</main>;
};
