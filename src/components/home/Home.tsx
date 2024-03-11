import React from "react";
import { Button } from "../ui/button";
import Nav from "../nav/Nav";

function Home() {

	const redirect = () => {

	}
	return (
		<main className=" max-sm:h-[60vh] w-full sm:min-h-screen bg-background text-foreground ">
			<Nav />
			<div className=" max-sm:h-[60vh] w-full sm:min-h-screen bg-background text-foreground flex justify-center items-center text-center">
				<div className="w-[65%]">
					<a
						href="#"
						className="py-2  px-4 text-sm rounded-full bg-secondary font-bold  "
					>
						Follow Along With LinkedIn
					</a>
					<h1 className=" sm:text-7xl font-bold my-4 text-xl ">
						An app built using Next.js 14 server components.
					</h1>
					<p className=" max-sm:text-sm text-xl font-bold my-4 w-[60%] max-sm:w-[100%] text-center mx-auto text-gray-400">
						I'm building a web app with Next.js 14 and open sourcing
						everything. inspired form Taxonomy.
					</p>

					<div className="flex gap-4 justify-center">
						<Button>Get Started</Button>
						<a
						 href="https://github.com/Anshul-251204"
						 target="blank"
						>
							<Button variant="outline">GitHub</Button>
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
