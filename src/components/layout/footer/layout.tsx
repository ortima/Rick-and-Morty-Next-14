import { CharacterAPI } from "@/api";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

export const FooterLayout = async () => {
	// TODO: добавить для episodes и locations
	const { info } = await CharacterAPI.getAllCharacters();

	return (
		<footer className="flex min-h-[300px] w-full shrink-0 flex-grow-0 justify-center bg-[#202329]">
			<div className="container flex flex-col items-center justify-around py-6 text-sm text-neutral-400 sm:text-xl">
				<ul className="flex gap-3.5 uppercase max-[425px]:grid">
					<li className="cursor-pointer hover:text-orange-500">
						<Link href={"/characters"}>Characters: {info.count}</Link>
					</li>
					<li className="cursor-pointer hover:text-orange-500">
						<Link href={"/episodes"}>Episodes: {info.count}</Link>
					</li>

					<li className="cursor-pointer hover:text-orange-500">
						<Link href={"/locations"}>Locations: {info.count}</Link>
					</li>
				</ul>
				<Link
					target={"_blank"}
					href="https://status.rickandmortyapi.com/"
					className="flex items-center uppercase"
				>
					<span className="hover:text-orange-500">Server status</span>
					<span className="text-[#6fff5b]">
						<GoDotFill />
					</span>
				</Link>
				<p>
					❮❯&nbsp;by&nbsp;
					<span className="cursor-pointer text-white underline underline-offset-4 hover:text-orange-500 hover:no-underline">
						<Link target={"_blank"} href="https://github.com/ortima">
							ortima
						</Link>
					</span>
					&nbsp; {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};
