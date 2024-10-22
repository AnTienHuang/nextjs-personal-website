"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { pages } from "./navData";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);


	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto max-w-7xl">
          <div className="flex justify-between gap-8">
            {pages.map((item) => (
              <Link
                href={item.href}
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9m0 0l9 9M9 21V9h6v12" />
            </svg>
          </Link>
				</div>
			</div>
		</header>
	);
};
