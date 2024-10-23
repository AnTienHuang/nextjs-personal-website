import Link from "next/link";
import React from "react";
import { pages } from "./components/navData";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-10">
            {pages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl duration-500 text-zinc-400 hover:text-zinc-100"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        <h1 className="z-10 text-4xl cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-zinc-300/80 to-zinc-300 dark:text-white">
          Soran Huang
        </h1>

        <div className="my-12 text-center animate-fade-in">
          <h2 className="text-lg text-green-500">
            I'm a software engineer from Taiwan currently based in London.
          </h2>
        </div>
        <div className="text-center animate-fade-in">
          <h2 className="text-lg text-green-500">
            My skill set includes: Salesforce Admin and Development, Microsoft D365, Power Platform, Azure,
          </h2>
          <h2 className="text-lg text-green-500">
            Python, Java, SQL, JavaScript/TypeScript, Next.js
          </h2>
        </div>
        {/* <div>
          Chat to my chat bot
        </div> */}
      </div>
    </div>
  );
}
