import React from "react";
import { Button } from "../ui/button";
import Nav from "../nav/Nav";

function Home() {
	return (
		<main className=" w-full min-h-screen bg-background text-foreground ">
			<Nav />
			<div className=" w-full min-h-screen bg-background text-foreground flex justify-center items-center text-center">
				<div className="w-[65%]">
					<a
						href="#"
						className="py-2 px-4 rounded-full bg-secondary font-bold  "
					>
						Follow Along With LinkedIn
					</a>
					<h1 className=" text-7xl font-bold my-4 ">
						An app built using Next.js 14 server components.
					</h1>
					<p className=" text-xl font-bold my-4 w-[60%] text-center mx-auto text-gray-400">
						I'm building a web app with Next.js 14 and open sourcing
						everything. inspired form Taxonomy.
					</p>

					<div className="flex gap-4 justify-center">
						<Button>Get Started</Button>
						<Button variant={"outline"}>GitHub</Button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
