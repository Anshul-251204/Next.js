import React from "react";
import { Button } from "../ui/button";
import { SquareCheckBig, X } from "lucide-react";

export default function Todo({isDone = false}:{isDone?:boolean}) {

	return (
		<div className={`${isDone ? "bg-secondary" : null } w-full p-4 flex justify-between items-center border-b`}>
			<div className="w-[60%]">
				<h1>Lorem ipsum dolor sit amet.</h1>
				<p className=" my-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quasi, unde.
				</p>
			</div>

			<div className="flex gap-4 items-center">
				<Button variant={"secondary"}>
					<X />
				</Button>
				<Button variant={"ghost"}>
					<SquareCheckBig className={ isDone ? " text-green-500 " : " text-foreground"} />
				</Button>
			</div>
		</div>
	);
}
