import { Logo } from "@/components/icons";
import Link from "next/link";

export const HeaderLayout = () => {
  return (
    <header className="bg-white w-full">
      <div className="container flex justify-between items-center py-4 ">
        <Link href={"/"}>
          <Logo />
        </Link>
        <nav className="text-slate-600 font-bold">
          <ul className="flex gap-5">
            <li className="cursor-pointer hover:text-orange-400">
              <Link href={"/characters"}>Characters</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-400">
              <Link href={"/episodes"}>Episodes</Link>
            </li>{" "}
            <li className="cursor-pointer hover:text-orange-400">
              <Link href={"/locations"}>Locations</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
