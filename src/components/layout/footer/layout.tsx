import React from "react";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

export const FooterLayout = () => {
  return (
    <footer className="shrink-0 flex-grow-0 w-full min-h-[200px] bg-[#202329] flex justify-center">
      <div className="container flex flex-col items-center justify-around text-neutral-400 text-sm sm:text-xl">
        <ul className="flex gap-3.5 uppercase">
          <li className="cursor-pointer hover:text-orange-500">Characters:</li>
          <li className="cursor-pointer hover:text-orange-500">Episodes:</li>
          <li className="cursor-pointer hover:text-orange-500">Locations:</li>
        </ul>
        <Link
          target={"_blank"}
          href="https://status.rickandmortyapi.com/"
          className="flex items-center uppercase "
        >
          <span className="hover:text-orange-500">Server status</span>
          <span className="text-[#6fff5b]">
            <GoDotFill />
          </span>
        </Link>
        <p>
          ❮❯&nbsp;by&nbsp;
          <span className="text-white underline underline-offset-4 cursor-pointer hover:text-orange-500 hover:no-underline">
            <Link target={"_blank"} href="https://github.com/ortima">
              ortima
            </Link>
          </span>
          &nbsp;2024
        </p>
      </div>
    </footer>
  );
};
