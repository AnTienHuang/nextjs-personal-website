"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const links = [
	{
		icon: <Linkedin size={40} />,
		href: "https://www.linkedin.com/in/an-tien-huang/",
		label: "LinkedIn",
		handle: "An-Tien Soran Huang",
	},
	{
		icon: <Mail size={40} />,
		href: "mailto:antien.huang@gmail.com",
		label: "Email",
		handle: "antien.huang@gmail.com",
	},
	{
		icon: <Github size={40} />,
		href: "https://github.com/AnTienHuang",
		label: "Github",
		handle: "AnTienHuang",
	},

];

export default function Contact() {
	return (
		<div className=" bg-black">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{links.map((item) => (
						<Card>
							<Link
								href={item.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span className="relative z-10 flex items-center justify-center w-20 h-20 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{item.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{item.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{item.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
