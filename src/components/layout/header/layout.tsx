import { Logo } from "@/components/icons";
import Link from "next/link";

export const HeaderLayout = () => {
  return (
    <header className="bg-white w-full">
      <div className="container flex justify-between items-center py-4 ">
        <Logo />
        <nav className="text-slate-600">
          <ul>
            <li className="cursor-pointer">
              <Link href={"/characters"}>Characters</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
