import React from "react";

export const FooterLayout = () => {
  return (
    <footer className="bottom-0 left-0 fixed w-full min-h-[300px] bg-gray-500">
      <div className="container text-slate-600">
        <ul className="flex justify-center">
          <li>Characters</li>
          <li>Episodes</li>
          <li>Locations</li>
          <li>Server status</li>
        </ul>
        <p>by ortima</p>
      </div>
    </footer>
  );
};
