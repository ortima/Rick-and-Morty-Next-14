import { Logo } from "@/components/icons";

export const HeaderLayout = () => {
  return (
    <header className="bg-white w-full">
      <div className="container flex justify-between items-center py-4 ">
        <Logo />
        <nav className="text-slate-600">
          <ul>
            <li>Characters</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
